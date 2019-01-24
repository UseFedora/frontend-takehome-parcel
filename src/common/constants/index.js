const constants = {
  AppName: 'Ruby Gems Search',
  UiElements: {
    ACTION_SAVE: 'save',
    ACTION_DELETE_SAVED: 'delete-saved',
    SEARCH_PAGE_TITLE: 'Ruby Gems Search',
    SAVED_PAGE_TITLE: 'Your Saved Gems',
    SEARCH_INPUT_PROMPT: 'Enter a search term',
    SEARCH_PROMPT: 'Enter a search term',
    SEARCH_EMPTY_RESULTS: 'No gems found for that search',
    SEARCH_PAGE_LINK: 'Search for more gems!',
    SAVED_EMPTY: 'You don\'t have any saved gems.',
  },
  GemsApi: {
    HOST: 'http://localhost',
    PORT: 3000,
    ENDPOINT_PATH: '/api/v1/search.json',
    QUERY_KEY: 'query',
  },
};

export default constants;
