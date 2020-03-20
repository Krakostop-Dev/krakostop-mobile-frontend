import React, { useContext } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import SearchResultTextInfo from './SearchResultUserInfo';
import SearchResultAvatar from './SearchResultAvatar';
import { ksStyle } from '../../../styles/basic/ksBasic';
import { MapContext } from '../../../modules/context/MapContext';
import navigateToLocation from '../../../modules/map/MapManager';
import { SearchContext } from '../../../modules/context/SearchContext';
import { redirectToMessenger } from '../../../modules/MessengerManager';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

function SearchResultView({ result, id }) {
  const { map } = useContext(MapContext);
  const { setSearchActive, rankingListRef, searchType } = useContext(
    SearchContext
  );
  const PAIR_LABEL = `Para #${result.pair_id}`;
  const RANKING_LABEL = `Miejsce ${result.ranking}`;

  function isResultIdEven() {
    return id % 2 === 0;
  }

  async function onResultPressed() {
    if (searchType === 'Map') {
      navigateToLocation(map, {
        latitude: Number(result.lat),
        longitude: Number(result.lng),
      });
    }
    if (searchType === 'Chat') {
      await redirectToMessenger(result.messenger);
    }
    if (searchType === 'Calendar') {
      Alert.alert('Do implementacji');
    }
    if (searchType === 'Ranking') {
      if (rankingListRef) {
        rankingListRef.scrollToIndex({
          animated: true,
          index: result.ranking - 5,
        });
      }
    }
    setSearchActive(false);
  }

  return (
    <TouchableOpacity onPress={() => onResultPressed()}>
      <View
        style={{
          ...styles.container,
          backgroundColor: isResultIdEven()
            ? ksStyle.colors.primaryColorLightDark
            : ksStyle.colors.primaryColorMediumLight,
        }}
      >
        <SearchResultTextInfo
          name={`${result.first_name} ${result.last_name}`}
          leftBottomText={PAIR_LABEL}
          rightBottomText={RANKING_LABEL}
        />
        <SearchResultAvatar avatar={result.avatar} />
      </View>
    </TouchableOpacity>
  );
}

export default SearchResultView;

SearchResultView.propTypes = {
  result: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    pair_id: PropTypes.number.isRequired,
    ranking: PropTypes.number.isRequired,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    messenger: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
