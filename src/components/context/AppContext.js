import React, {createContext} from 'react'
import {reducer} from "./AppContextReducer"
import {removeDataFromStorage, saveDataInStorage} from "../../modules/JWTTokenManager";

export const AppContext = createContext({
    user: {},
    isLoggedIn: false,
    error: ""
});

const initialState = {
    user: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        verified_login: false,
    }
};

async function logIn(dispatch, token, user) {
    dispatch({type: 'logIn', user});
    await saveDataInStorage('TOKEN', token);
    await saveDataInStorage('USER', JSON.stringify(user));
}

async function logOut(dispatch) {
    dispatch({type: 'logOut'});
    await removeDataFromStorage('TOKEN');
    await removeDataFromStorage('USER');
}

export const AppContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                logIn: async (token, user) => await logIn(dispatch, token, user),
                logOut: async () => await logOut(dispatch),
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
