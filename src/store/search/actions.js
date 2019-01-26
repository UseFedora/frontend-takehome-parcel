import { GemsApiUtils } from '../../utils';
import {
  UPDATING_SEARCH_VALUE,
  FETCH_GEMS_START,
  FETCH_GEMS_SUCCESSFUL,
  FETCH_GEMS_FAILED,
  CLEAR_RESULTS,
} from './types';

const _fetchGemsSuccess = (results) => { 
  return { type: FETCH_GEMS_SUCCESSFUL, results};
};

const _fetchGemsFailure = () => {
  return { type: FETCH_GEMS_FAILED };
};

export const setUpdatingSearchValue = () => { 
  return {type: UPDATING_SEARCH_VALUE };
};

export const startFetchGems = () => { 
  return { type: FETCH_GEMS_START };
};

export const fetchGems = (searchValue) => {
  return (dispatch) => {
    return GemsApiUtils.fetchGems(searchValue)
      .then((results) => {
        dispatch(_fetchGemsSuccess(results));
      })
      .catch((error) => {
        dispatch(_fetchGemsFailure());
        throw(error);
      });
  };
};

export const clearResults = () => { 
  return {type: CLEAR_RESULTS };
};
