import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import ParticipantView from './ParticipantView';
import PairOverlayHeaderView from './PairOverlayHeaderView';

const styles = StyleSheet.create({
  overlay: {
    padding: 0,
  },
  container: { flexDirection: 'column' },
  pairView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
});

function PairOverlay({ participant, index, isVisible, setIsVisible }) {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
      overlayBackgroundColor={ksStyle.colors.primaryColorLight}
      height="auto"
      overlayStyle={styles.overlay}
      borderRadius={3}
    >
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
    </Overlay>
  );
}

export default PairOverlay;

PairOverlay.propTypes = {
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
