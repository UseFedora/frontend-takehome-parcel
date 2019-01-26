export default {  
  loadLocalItem: (item) => {
    try {
      const serialized = localStorage.getItem(item);
      if (serialized === null) {
        return undefined;
      }
      return JSON.parse(serialized);
    } catch (error) {
      throw Error('Unable to retrieve data from local storage.');
    }
  },
  saveLocalItem: (itemKey, itemValue) => {
    try {
      localStorage.setItem(itemKey, JSON.stringify(itemValue));
    } catch (error) {
      throw Error('Unable to save data to local storage.');
    }
  },
};
