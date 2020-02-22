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

function PairOverlay({ isVisible, setIsVisible }) {
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
        <PairOverlayHeaderView setIsVisible={setIsVisible} />

        <View style={styles.pairView}>
          <ParticipantView />
          <ParticipantView />
        </View>
      </View>
    </Overlay>
  );
}

export default PairOverlay;

PairOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
