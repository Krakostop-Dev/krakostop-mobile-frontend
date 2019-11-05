const reducer = (state, action) => {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case 'logOut':
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };
    case 'refreshLogin':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case 'updateUser':
      return {
        ...state,
        user: { ...state.user, ...action.payload.user },
      };
    default:
      return state;
  }
};

export default reducer;
