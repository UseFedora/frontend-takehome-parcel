import React from 'react';

import '../Style/searchBar.css';

class SearchBar extends React.Component {
    search = () => {
        const term = this.refs.term.value;
        if (!term.length) return;
        const searchRequest = new XMLHttpRequest();
        const endpoint = `http://localhost:3000/api/v1/search.json?query=${term}`

        searchRequest.addEventListener('load', result => {
            this.props.updateSearchResults(term, JSON.parse(searchRequest.response));
        });

        searchRequest.open('GET', endpoint);
        searchRequest.send();
    }
    
    render () {
        return (            
            <div className="search-bar-wrap">
                <input ref="term" type="text" placeholder="i.e. rails or multi_json" />
                <div onClick={this.search}>Search</div>
            </div>
        );
    }
};

export default SearchBar;
