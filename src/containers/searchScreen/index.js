import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Constants from '../../common/constants';
import * as SearchActions from '../../store/search/actions';
import * as SavedActions from '../../store/saved/actions';
import Banner from '../../components/banner';
import BannerTitle from '../../components/bannerTitle';
import SavedItemsIndicator from '../../components/savedItemsIndicator';
import PageTitle from '../../components/pageTitle';
import ResultsPane from '../../components/resultsPane';
import List from '../../components/list';
import GemCard from '../../components/gemCard';
import SearchBar from '../../components/searchBar';
import SearchInput from '../../components/searchInput';
import SearchButton from '../../components/searchButton';
import styles from './searchScreen.css';

class SearchScreen extends Component {
  state = {
    searchValue: '',
  };

  static propTypes = {
    results: PropTypes.array,
    saved: PropTypes.array,
    isUserUpdating: PropTypes.bool,
    isLoading: PropTypes.bool,
    searchValue: PropTypes.string,
    setUpdatingSearchValue: PropTypes.func,
    fetchGems: PropTypes.func,
    clearResults: PropTypes.func,
    saveItem: PropTypes.func,
    deleteSavedItem: PropTypes.func,
  };

  search = (searchValue) => {
    this.props.startFetchGems();
    this.props.fetchGems(searchValue);
  }

  saveItem = (name) => {
    const { results, saved, saveItem } = this.props;
    const item = results.filter((savedItem) => savedItem.name === name)[0];

    if (typeof item !== undefined) {
      saveItem({
        ...item,
        dt: new Date().getTime(),
        isSaved: true,
      }, saved);
    }
  }

  deleteSavedItem = (name) => {
    const { saved, deleteSavedItem } = this.props;
    const item = saved.filter((savedItem) => savedItem.name === name)[0];

    if (typeof item !== undefined) {
      deleteSavedItem(item, saved);
    }
  };

  handleClickSave = (action, name) => {
    if (Constants.UiElements.ACTION_SAVE === action) {
      this.saveItem(name);
    }
    if (Constants.UiElements.ACTION_DELETE_SAVED === action) {
      this.deleteSavedItem(name);
    }
  }

  handleSearchValueChange = (value) => {
    const { setUpdatingSearchValue, clearResults } = this.props;
    const searchValue = value.trim();
    this.setState({
      searchValue,
    });

    if (searchValue.trim().length === 0) {
      clearResults();
    } else {
      setUpdatingSearchValue();
    }
  }

  handleSearchInputSubmit = () => {
    const { searchValue } = this.state;
    this.search(searchValue);
  }

  handleSearchButtonClick = () => {
    const { searchValue } = this.state;
    this.search(searchValue);
  }

  render() {
    const { searchValue } = this.state;
    const {
      results,
      saved,
      isUserUpdating,
      isLoading,
      searchValue: lastSearchValue,
    } = this.props;

    const currentSearchValue = searchValue.length === 0
      ? lastSearchValue
      : searchValue;
    const emptyResultsMessage = !isUserUpdating && currentSearchValue.length > 0 && results.length === 0
      ? Constants.UiElements.SEARCH_EMPTY_RESULTS
      : Constants.UiElements.SEARCH_PROMPT;

    return (
      <div>
        <Banner>
          <BannerTitle label={Constants.AppName} />
          <div>
            <Link to="/saved">
              <SavedItemsIndicator numberOf={saved.length} />
            </Link>
          </div>
        </Banner>

        <div className={styles.pageTitleContainer}>
          <PageTitle label={Constants.UiElements.SEARCH_PAGE_TITLE} />
        </div>

        <div className={styles.searchContainer}>
          <SearchBar>
            <SearchInput
              placeholderText={Constants.UiElements.SEARCH_INPUT_PROMPT}
              searchValue={currentSearchValue}
              onChange={this.handleSearchValueChange}
              onSubmit={this.handleSearchInputSubmit}
            />
            <SearchButton
              onClick={this.handleSearchButtonClick}
            />
          </SearchBar>
        </div>

        <div className={styles.resultsContainer}>
          <ResultsPane
            numberOfResults={results.length}
            emptyResultsMessage={emptyResultsMessage}
            isLoading={isLoading}
          >
            <List>
            {
              results.map((gemData, index) =>
                <GemCard
                  key={`gemitem-${index}`}
                  onClickSave={this.handleClickSave}
                  {...gemData}
                />
              )
            }
            </List>
          </ResultsPane>
        </div>
      </div>
    );
  }
}

const _mergeResultsAndSaved = (results, saved) => {
  const savedNames = saved.map((savedItem) => savedItem.name);
  for (let resultItem of results) {
    resultItem.isSaved = savedNames.includes(resultItem.name);
  }
  return results;
};

function mapStateToProps(state) {
  const { search, saved } = state;

  return {
    results: _mergeResultsAndSaved(search.results, saved.saved),
    isUserUpdating: search.isUserUpdating,
    isLoading: search.isLoading,
    searchValue: search.searchValue,
    saved: saved.saved,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    setUpdatingSearchValue,
    startFetchGems,
    fetchGems,
    clearResults,
    saveItem,
    deleteSavedItem,
  } = bindActionCreators({
    ...SearchActions,
    ...SavedActions,
  }, dispatch);
  return {
    setUpdatingSearchValue,
    startFetchGems,
    fetchGems,
    clearResults,
    saveItem,
    deleteSavedItem,
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
