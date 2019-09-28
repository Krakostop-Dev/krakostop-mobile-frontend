import {saveToken} from "../../modules/JWTTokenManager";

export const reducer  = (state, action) => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                user: action.user
            };
        case 'logOut':
            return {

            };
        default:
            console.log("e");
            return state;
    }
};