export const reducer  = (state, action) => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                user: action.user,
                token: action.token
            };
        default:
            console.log("e");
            return state;
    }
};