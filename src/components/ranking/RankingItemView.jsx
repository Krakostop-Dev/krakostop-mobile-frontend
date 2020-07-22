import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';
import RankingPairOverlay from '../pairOverlay/RankingPairOverlay';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 3,
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 5,
    height: 85,
  },
  text: {
    fontSize: 16,
    fontFamily: ksStyle.font.base,
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  place: { width: '16%' },
  people: { width: '42%' },
  pairNo: { width: '16%' },
  kmLeft: { width: '26%' },
  touchable: { width: '100%' },
});

function RankingItemView({ participant, index, height, itemSpace }) {
  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setIsPairOverlayVisible(true)}
      >
        <View style={{ ...styles.container, height, marginBottom: itemSpace }}>
          <View style={styles.place}>
            <Text style={[styles.text, styles.textCenter]}>{index + 1}</Text>
          </View>
          <View style={styles.people}>
            <Text
              style={styles.text}
            >{`${participant.pair.users[0].first_name} ${participant.pair.users[0].last_name}`}</Text>
            <Text
              style={styles.text}
            >{`${participant.pair.users[1].first_name} ${participant.pair.users[1].last_name}`}</Text>
          </View>
          <View style={styles.pairNo}>
            <Text style={styles.text}>#{participant.pair.pair_nr}</Text>
          </View>
          <View style={styles.kmLeft}>
            <Text style={styles.text}>1213km</Text>
          </View>
        </View>
      </TouchableOpacity>

      <RankingPairOverlay
        isVisible={isPairOverlayVisible}
        setIsVisible={setIsPairOverlayVisible}
        participant={participant}
        index={index}
      />
    </>
  );
}

export default RankingItemView;

RankingItemView.propTypes = {
  participant: PropTypes.shape({
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  itemSpace: PropTypes.number.isRequired,
};
