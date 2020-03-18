const reducer = (state, action) => {
  switch (action.type) {
    case 'setSearchActive':
      return {
        ...state,
        isSearchActive: action.payload.isSearchActive,
        searchPattern: '',
        searchResult: [],
      };
    case 'setSearch':
      return {
        ...state,
        searchPattern: action.payload.search,
        searchResult: action.payload.result,
      };
    default:
      return state;
  }
};

export default reducer;
