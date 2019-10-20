import React, {createContext} from 'react';
import {reducer} from './AppContextReducer';
import {
    getDataFromStorage,
    removeDataFromStorage,
    saveDataInStorage,
} from '../../modules/Storage';

export const AppContext = createContext({
    user: {},
    isLoggedIn: false,
    error: '',
});

const initialState = {
    user: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        verified_login: false,
    },
};

async function logIn(dispatch, token, user) {
    await saveDataInStorage('TOKEN', token);
    await saveDataInStorage('USER', JSON.stringify(user));

    dispatch({type: 'logIn', payload: user});
}

async function logOut(dispatch) {
    await removeDataFromStorage('TOKEN');
    await removeDataFromStorage('USER');

    dispatch({type: 'logOut'});
}

async function updateUser(dispatch, user) {
    //TODO: HIT BACKEDN WITH UPDATED USER
    await saveDataInStorage('USER', JSON.stringify(user));
    dispatch({type: "updateUser", payload: user});
}

async function refreshLogin(dispatch) {
    const token = await getDataFromStorage('TOKEN');
    const user = await getDataFromStorage('USER');

    console.log("TOKEN:" + token);
    console.log("USER:" + user);

    if (token && user) {
        dispatch({type: 'refreshLogin', payload: user});
    } else {
        console.log('There is no token!');
    }
}

export const AppContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                logIn: async (token, user) => await logIn(dispatch, token, user),
                logOut: async () => await logOut(dispatch),
                refreshLogin: async () => await refreshLogin(dispatch),
                updateUser: async (user) => await updateUser(dispatch, user),
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
