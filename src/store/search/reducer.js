import {
  UPDATING_SEARCH_VALUE,
  FETCH_GEMS_START,
  FETCH_GEMS_SUCCESSFUL,
  FETCH_GEMS_FAILED,
  CLEAR_RESULTS,
} from './types';

const initialState = {
  isUserUpdating: false,
  isLoading: false,
  searchValue: '',
  hasSearchBeenMade: false,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATING_SEARCH_VALUE: 
    return {
      ...state,
      isUserUpdating: true,
    };

  case FETCH_GEMS_START:
    return {
      ...state,
      isLoading: true,
    };

  case FETCH_GEMS_SUCCESSFUL:
    return {
      ...state,
      isLoading: false,
      hasSearchBeenMade: true,
      results: action.results,
    };

  case FETCH_GEMS_FAILED:
  case CLEAR_RESULTS:
    return {
      ...state,
      isLoading: false,
      searchValue: '',
      results: [],
    };

  default:
    return state;
  }
};

export default reducer;
