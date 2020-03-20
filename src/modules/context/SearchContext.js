import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './SearchContextReducer';
import { MapContext } from './MapContext';
import searchParticipants from '../search/SearchManger';

export const SearchContext = createContext({
  isSearchActive: false,
  searchResult: [],
  searchPattern: '',
  rankingListRef: null,
  searchType: '',
});

const initialState = {
  isSearchActive: false,
  searchResult: [],
  searchPattern: '',
};

function setSearchActive(dispatch, isSearchActive, searchType) {
  dispatch({
    type: 'setSearchActive',
    payload: { isSearchActive, searchType },
  });
}
function setRankingListRef({ dispatch, listRef }) {
  dispatch({ type: 'setRankingListRef', payload: { listRef } });
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
        setSearchActive: (isSearchActive, searchType = '') =>
          setSearchActive(dispatch, isSearchActive, searchType),
        searchByPattern: searchPattern => searchByPattern(searchPattern),
        setRankingListRef: listRef => setRankingListRef({ dispatch, listRef }),
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
