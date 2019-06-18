import React from "react";
import ReactDOM from "react-dom";

import SearchBar from './Components/SearchBar';
import List from "./Components/List";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            savedGems: JSON.parse(window.localStorage.getItem('saved_gems')) || [],
            searchResults: {
                term: '',
                items: []
            }
        };
    }

    saveGem = gem => {
        const newState = {...this.state};        
        const alreadySaved = newState.savedGems.filter(savedGem => savedGem.sha === gem.sha).length;
        if (alreadySaved) return;
        newState.savedGems.push(gem);
        window.localStorage.setItem('saved_gems', JSON.stringify(newState.savedGems));
        this.setState(newState);  
    }

    removeSavedGem = gem => {
        const newState = {...this.state};
        newState.savedGems = newState.savedGems.filter(savedGem => savedGem.sha !== gem.sha);
        window.localStorage.setItem('saved_gems', JSON.stringify(newState.savedGems));
        this.setState(newState);
    }

    updateSearchResults = (term, result) => {
        const newState = {...this.state};
        newState.searchResults.term = term;
        newState.searchResults.items = result.sort((a, b) => a.downloads < b.downloads ? 1 : -1);
        this.setState(newState);
    }

    render() {
        const { savedGems, searchResults } = this.state;
        return <div style={{textAlign: "center"}}>
            <h1>Search for Your Favorite Ruby Gems...</h1>
            <SearchBar updateSearchResults={this.updateSearchResults}/>
            <List
                items={searchResults.items} 
                title={`Results for "${searchResults.term}":`} 
                throttle={true}
                action={this.saveGem}
                actionText="Save" />
            <List 
                items={savedGems} 
                title="Your Saved Gems" 
                throttle={true} 
                action={this.removeSavedGem} 
                actionText="Remove" /> 
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
