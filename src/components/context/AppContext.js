import React, {createContext}from 'react'
import {reducer} from "./AppContextReducer"
import {saveToken} from "../../modules/JWTTokenManager";

export const AppContext = createContext({
    user: {},
    isLoggedIn: false,
    error: ""
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
                async logIn(token, user){
                    dispatch({ type: 'logIn', user });
                    await saveToken(token);
                },
                logOut: () => dispatch({ type: 'logOut', payload: "LOL" }),
                refreshLogIn: () => dispatch({ type: 'refreshLogIn', payload: "LOL" })
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
