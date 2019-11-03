import React, { createContext } from 'react';
import { reducer } from './AppContextReducer';
import {
  getDataFromStorage,
  removeDataFromStorage,
  saveDataInStorage,
} from '../../modules/Storage';
import KsAxios from '../../modules/KsAxios';

export const AppContext = createContext({
  user: null,
  token: null,
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

  dispatch({ type: 'logIn', payload: { user, token } });
}

async function logOut(dispatch) {
  await removeDataFromStorage('TOKEN');
  await removeDataFromStorage('USER');

  dispatch({ type: 'logOut' });
}
async function updateUser(dispatch, user) {
  // TODO: Change order of functions
  await saveDataInStorage('USER', JSON.stringify(user));
  dispatch({ type: 'updateUser', payload: user });

  // TODO: Change endpoint path if it will be different
  try {
    await KsAxios.put('api/v1/user', user);
  } catch (e) {
    // TODO: Change console.log to console.error when endpoint will be available
    console.log(e);
  }
}

async function refreshLogin(dispatch) {
  const token = await getDataFromStorage('TOKEN');
  const user = await getDataFromStorage('USER');

  if (token && user) {
    dispatch({ type: 'refreshLogin', payload: { user, token } });
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
        updateUser: async user => await updateUser(dispatch, user),
        refreshLogin: async () => await refreshLogin(dispatch),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
