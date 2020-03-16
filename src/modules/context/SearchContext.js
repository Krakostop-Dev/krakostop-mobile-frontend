import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './SearchContextReducer';

export const SearchContext = createContext({
  isSearchActive: false,
});

const initialState = {
  isSearchActive: false,
};

function setSearchActive(dispatch, isSearchActive) {
  dispatch({ type: 'setSearchActive', payload: { isSearchActive } });
}

function SearchContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <SearchContext.Provider
      value={{
        ...state,
        setSearchActive: isSearchActive =>
          setSearchActive(dispatch, isSearchActive),
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;

SearchContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
