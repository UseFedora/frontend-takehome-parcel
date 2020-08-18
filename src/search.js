/*
Future improvements:
    - In addition to debouncing, filter out whitespace characters before making an API call
    - In addition to debouncing, consider setting a rate limit so as to not call the API too many times
    - Write tests to assert that:
        - API calls do not exceed a certain amount per minute
        - API response results are parsed and appended to the dropdown list (expected number + expected values)
        - Default text is shown when no results are found
        - Saving an item saves that item to local storage
        - Local storage values can be parsed
        - Local storage can be accessed after refreshing the page
        - Local storage values match what was written saved
        - Saving an item changes the heart icon color on both the dropdown list and the saves list
        - Removing a save removes the value in local storage
        - Removing a save changes the heart icon on both the dropdown list and the saves list
*/


class Search {
    container;
    search;
    results;
    savedItems;
    saveDisplay;

    constructor(container) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Search for Ruby gems");

        let results = document.createElement("ul");
        results.setAttribute("id", "results");

        let saveTitle = document.createElement("h2");
        saveTitle.innerHTML = "Saved Gems";

        let saveList = document.createElement("ul");
        saveList.setAttribute("id", "saveList");
        
        let saveDisplay = document.createElement("div");
        saveDisplay.setAttribute("id", "saved");
        saveDisplay.appendChild(saveTitle);
        saveDisplay.appendChild(saveList);

        // If there are previously saved gems in local storage, use those
        const local = this.getSavedListFromLocalStorage();
        this.savedItems = local !== null ? local : [];
        this.container = container;
        this.search = input;
        this.results = results;
        this.saveDisplay = saveList;

        this.container.appendChild(this.search);
        this.container.appendChild(this.results);
        this.container.appendChild(saveDisplay);
        
        this.updateSaveDisplay();
        this.addEventListeners();
    }

    // event listeners
    addEventListeners = () => {
        
        // When the search input changes, make a (debounced) API call to get results
        this.search.addEventListener("input", (evt) => {
            const text = evt.target.value;
            this.debounce(this.callApi(text));
		});

        // When the save button is clicked, update the saved list (visually and in local storage)
		this.container.addEventListener("click", (evt) =>  {
			if(evt.target && evt.target.nodeName == "DIV") {
                const name = evt.target.getAttribute("data-gem-name");

                // this updates the results list if a gem is unsaved from the saved list
                if (this.saveDisplay.contains(evt.target))
                {
                    const previouslySaved = this.results.querySelector('[data-gem-name="' + name + '"]');
                    if (previouslySaved != null)
                    {
                        previouslySaved.classList.remove("active");
                    }
                }

                this.saveGem(name);
                this.updateSaveDisplay();
                
                evt.target.classList.toggle("active");
			}
		});
    }

    // Simple debounce call to ensure the we only call the API every 500 milliseconds
    debounce = (callback) => {
        let timeout;
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(callback.bind(this), 500);
        }
    }


    // make an API call to get gems
    callApi = (param) => {
        fetch("http://localhost:3000/api/v1/search.json?query=" + param)
        .then( (data) => { return data.json() })
        .then( (json) => { return json.map(gem => gem.name) })
		.then( (gems) => {
            
            // If nothing is found, show default text
            if (gems.length === 0)
            {
                let noresult = document.createElement("li");
                noresult.innerHTML = "No results found";
                this.results.innerHTML = "";
                this.results.appendChild(noresult);
            }
            // otherwise populate the results
            else
            {
                results.innerHTML = this.generateListItems(gems);
            }
            
		})
		.catch( (error) => {
			console.log(error);
		})
    }

    // handles creating the markup for each gem result
    generateListItems = (array) => {
        return array.map((gem) => {
            const isGemSaved = this.isGemSaved(gem) ? "active" : "";
            return `
            <li>
                <span>${gem}</span>
                <div data-gem-name="${gem}" class="save ${isGemSaved}"></div>
            </li>
            `;
        }).join("");
    }

    // boolean: determines if a given gem is already saved
    isGemSaved = (name) => {
        const savesList = this.getSavedListFromLocalStorage();
        if (savesList !== null && savesList.includes(name)) {
            return true;
        }
        
        return false;
    }

    // saves or unsaves a gem in local storage
    saveGem = (name) => {
        // if a gem is already saved, it is removed
        if (this.savedItems.includes(name))
        {
            const index = this.savedItems.indexOf(name);
            this.savedItems.splice(index, 1);
        }
        // otherwise, save the gem
        else
        {
            this.savedItems.push(name);
        }
        
        // local storage only handles strings, so we have to stringify the array of saved gems
        localStorage.setItem("saved", JSON.stringify(this.savedItems));
    }

    // parses an array of saved gems from local storage
    getSavedListFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("saved"));
    }
    
    // updates the list of saved gems
    updateSaveDisplay = () => {
        const local = this.getSavedListFromLocalStorage();
        
        // shows default text when no gems are saved
        if (local !== null && local.length == 0) {
            let nosaves = document.createElement("li");
            nosaves.innerHTML = "No gems saved yet";
            this.saveDisplay.innerHTML = "";
            this.saveDisplay.appendChild(nosaves);
        }
        // otherwise, populates saved items from the list in local storage
        else if (local !== null){
            this.saveDisplay.innerHTML = this.generateListItems(local);
        }
    }
}

let search = new Search(document.getElementById("search"));