import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './SearchContextReducer';
import { MapContext } from './MapContext';
import searchParticipants from '../SearchManger';

export const SearchContext = createContext({
  isSearchActive: false,
  searchResult: [],
  searchPattern: '',
});

const initialState = {
  isSearchActive: false,
  searchResult: [],
  searchPattern: '',
};

function setSearchActive(dispatch, isSearchActive) {
  dispatch({ type: 'setSearchActive', payload: { isSearchActive } });
}

function SearchContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { participants } = useContext(MapContext);

  function searchByPattern(searchPattern) {
    const result = searchParticipants(searchPattern, participants);
    dispatch({ type: 'setSearch', payload: { searchPattern, result } });
  }
  return (
    <SearchContext.Provider
      value={{
        ...state,
        setSearchActive: isSearchActive =>
          setSearchActive(dispatch, isSearchActive),
        searchByPattern: searchPattern => searchByPattern(searchPattern),
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
