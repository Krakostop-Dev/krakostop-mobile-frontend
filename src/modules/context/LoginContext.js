import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './LoginContextReducer';
import {
  getDataFromStorage,
  removeDataFromStorage,
  saveDataInStorage,
} from '../Storage';
import { convertRelativePathToAbsoluteUri } from '../ImageLoader';

export const LoginContext = createContext({
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    verified_login: false,
    avatar: null,
    pairID: null,
    messenger: null,
    phone: null,
    is_phone_enabled: null,
    facebook: null,
    ranking: null,
  },
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
    avatar: null,
    facebook: 'https://www.facebook.com/zuck',
    is_phone_enabled: true,
    messenger: null,
    ranking: 12,
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
  const newUser = user;
  if (typeof user.avatar.uri === 'undefined') {
    newUser.avatar = convertRelativePathToAbsoluteUri(user.avatar);
  }
  await saveDataInStorage('USER', JSON.stringify(newUser));
  dispatch({ type: 'updateUser', payload: { user: newUser } });
}

async function refreshLogin(dispatch) {
  const token = await getDataFromStorage('TOKEN');
  const user = await getDataFromStorage('USER');
  if (token && user) {
    dispatch({
      type: 'refreshLogin',
      payload: { user: JSON.parse(user), token },
    });
    return true;
  }
  return false;
}

function setUserRanking({ pairs, dispatch, state }) {
  console.log(JSON.stringify(state));
  const ranking = pairs.findIndex(pair => {
    return pair.pair_id === state.user.pair_id;
  });
  dispatch({
    type: 'setUserRanking',
    payload: { ranking: ranking - 10 },
  });
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
        setUserRanking: pairs => setUserRanking({ pairs, state, dispatch }),
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
