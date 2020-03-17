import React from 'react';
import { StyleSheet, TouchableOpacity, Alert, View } from 'react-native';
import PropTypes from 'prop-types';
import SearchResultTextInfo from './SearchResultUserInfo';
import SearchResultAvatar from './SearchResultAvatar';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
});

function SearchResultView({ result, id }) {
  const PAIR_LABEL = `para ${result.pair_id}`;
  const RANKING_LABEL = `miejsce ${result.ranking}`;

  function isResultIdEven() {
    return id % 2 === 0;
  }

  return (
    <TouchableOpacity onPress={() => Alert.alert('ELOOO')}>
      <View
        style={{
          ...styles.touchable,
          backgroundColor: isResultIdEven()
            ? ksStyle.colors.primaryColorMedium
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
    avatar: PropTypes.number.isRequired,
    pair_id: PropTypes.string.isRequired,
    ranking: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
