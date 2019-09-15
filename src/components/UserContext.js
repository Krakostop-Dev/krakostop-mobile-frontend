import React, {createContext}from 'react'

export const AppContext = createContext({
    user: {
        name: "",
        test: ""
    },

});
const reducer = (state, action) => {
    switch (action.type) {
        case 'loginUser':
            return {
                ...state,
                isAuthenticated: action.payload.authenticated,
                name: action.payload.user.name
            };
        default:
            return state;
    }
};

