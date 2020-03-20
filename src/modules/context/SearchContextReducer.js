const reducer = (state, action) => {
  switch (action.type) {
    case 'setSearchActive':
      return {
        ...state,
        isSearchActive: action.payload.isSearchActive,
        searchType: action.payload.searchType,
        searchPattern: '',
        searchResult: [],
      };
    case 'setSearch':
      return {
        ...state,
        searchPattern: action.payload.search,
        searchResult: action.payload.result,
      };
    case 'setRankingListRef':
      return {
        ...state,
        rankingListRef: action.payload.listRef,
      };
    default:
      return state;
  }
};

export default reducer;
