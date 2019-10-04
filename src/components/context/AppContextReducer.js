export const reducer = (state, action) => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };
        case 'logOut':
            return {
                ...state,
                user: {},
                isLoggedIn: false
            };
        default:
            return state;
    }
};