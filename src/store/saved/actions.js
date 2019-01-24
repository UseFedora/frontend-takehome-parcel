import { LocalStorageUtils } from '../../utils';
import {
  LOAD_SAVED
} from './types';

export const loadSaved = () => {
  const saved = LocalStorageUtils.loadLocalItem('saved');
  return {
    type: LOAD_SAVED,
    saved: typeof saved === 'undefined'
      ? []
      : saved
  };
};

export const saveItem = (item, savedItems) => {  
  return (dispatch) => {
    const newSavedItems = savedItems.concat(item);
    LocalStorageUtils.saveLocalItem('saved', newSavedItems);
    dispatch(loadSaved());
  };
};

export const deleteSavedItem = (item, savedItems) => {  
  return (dispatch) => {
    const newSavedItems = savedItems.filter((savedItem) => savedItem.name !== item.name);
    LocalStorageUtils.saveLocalItem('saved', newSavedItems);
    dispatch(loadSaved());
  };
};
