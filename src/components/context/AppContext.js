import React, {createContext}from 'react'
import {reducer} from "./AppContextReducer"
export const AppContext = createContext({
    user: {},
    isLoggedIn: false,
    error: "",
    logIn: (token, user) => {
    },
    logOut: () => {
    },
    refreshLogIn: () => {
    },
});
const initialState = {
    user : {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        verified_login: false,
    }
};
export const UserContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                logIn: (token,user) => dispatch({ type: 'logIn', token, user}),
                logOut: () => dispatch({ type: 'logOut', payload: "LOL" }),
                refreshLogIn: () => dispatch({ type: 'refreshLogIn', payload: "LOL" })
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
