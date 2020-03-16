const reducer = (state, action) => {
  switch (action.type) {
    case 'setSearchActive':
      return {
        ...state,
        isSearchActive: action.payload.isSearchActive,
      };
    default:
      return state;
  }
};

export default reducer;
