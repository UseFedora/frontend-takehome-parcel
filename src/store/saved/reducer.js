import {
  LOAD_SAVED
} from './types';

const initialState = {
  saved: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_SAVED:
    return {
      ...state,
      saved: action.saved,
    };
  default:
    return state;
  }
};

export default reducer;
