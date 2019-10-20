export const reducer = (state, action) => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'logOut':
            return {
                ...state,
                user: {},
                isLoggedIn: false,
            };
        case 'refreshLogin':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'updateUser':
            return {
                ...state,
                user: {...state.user, ...action.payload}
            };
        default:
            return state;
    }
};
