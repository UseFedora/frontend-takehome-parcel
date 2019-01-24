import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Constants from '../../common/constants';
import * as SavedActions from '../../store/saved/actions';
import Banner from '../../components/banner';
import BannerTitle from '../../components/bannerTitle';
import PageTitle from '../../components/pageTitle';
import ResultsPane from '../../components/resultsPane';
import List from '../../components/list';
import GemCard from '../../components/gemCard';
import styles from './savedScreen.css';

class SavedScreen extends Component {
  static propTypes = {
    saved: PropTypes.array,
    deleteSavedItem: PropTypes.func,
  };

  deleteSavedItem = (name) => {
    const { saved, deleteSavedItem } = this.props;
    const item = saved.filter((savedItem) => savedItem.name === name)[0];

    if (typeof item !== undefined) {
      deleteSavedItem(item, saved);
    }
  };

  handleClickSave = (action, name) => {
    if (Constants.UiElements.ACTION_DELETE_SAVED === action) {
      this.deleteSavedItem(name);
    }
  }

  render() {
    const {
      saved
    } = this.props;

    const emptyResultsMessage = Constants.UiElements.SAVED_EMPTY;

    return (
      <div>
        <Banner>
          <BannerTitle label={Constants.AppName} />
            <Link to="/">
              <p className={styles.link}>{Constants.UiElements.SEARCH_PAGE_LINK}</p>
            </Link>
        </Banner>

        <div className={styles.pageTitleContainer}>
          <PageTitle label={Constants.UiElements.SAVED_PAGE_TITLE} />
        </div>

        <div className={styles.resultsContainer}>
          <ResultsPane
            numberOfResults={saved.length}
            emptyResultsMessage={emptyResultsMessage}
            isLoading={false}>
            <List>
            {
              saved.map((gemData, index) =>
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

function mapStateToProps(state) {
  const { saved } = state;
  return {
    saved: saved.saved,
  };
}

function mapDispatchToProps(dispatch) {
  const { deleteSavedItem } = bindActionCreators(SavedActions, dispatch);
  return {
    deleteSavedItem,
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(SavedScreen); 
