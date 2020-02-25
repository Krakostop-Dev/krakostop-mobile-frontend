import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './LoginContextReducer';
import {
  getDataFromStorage,
  removeDataFromStorage,
  saveDataInStorage,
} from '../Storage';
import mockUser from '../../mock';

export const LoginContext = createContext({
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    verified_login: false,
    avatar: null,
    pairID: null,
    facebook_link: null,
    phone_number: null,
  },
  token: null,
  isLoggedIn: false,
  error: '',
});

/*
const initialState = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    verified_login: false,
    avatar: null,
  },
};
*/

const initialState = mockUser;

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
  await saveDataInStorage('USER', JSON.stringify(user));
  dispatch({ type: 'updateUser', payload: { user } });
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

function LoginContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <LoginContext.Provider
      value={{
        ...state,
        logIn: async (token, user) => logIn(dispatch, token, user),
        logOut: async () => logOut(dispatch),
        updateUser: async user => updateUser(dispatch, user),
        refreshLogin: async () => refreshLogin(dispatch),
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;

LoginContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
