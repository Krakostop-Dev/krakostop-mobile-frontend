import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ParticipantView from './ParticipantView';
import PairOverlayHeaderView from './PairOverlayHeaderView';
import KSOverlay from '../ksOverlay/KSOverlay';

const styles = StyleSheet.create({
  container: { flexDirection: 'column' },
  pairView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
});

function MapPairOverlay({ participant, index, isVisible, setIsVisible }) {
  return (
    <KSOverlay setIsVisible={setIsVisible} isVisible={isVisible}>
      <View style={styles.container}>
        <PairOverlayHeaderView
          participant={participant}
          index={index}
          setIsVisible={setIsVisible}
        />

        <View style={styles.pairView}>
          <ParticipantView user={participant.pair.users[0]} />
          <ParticipantView user={participant.pair.users[1]} />
        </View>
      </View>
    </KSOverlay>
  );
}

export default MapPairOverlay;

MapPairOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  participant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
