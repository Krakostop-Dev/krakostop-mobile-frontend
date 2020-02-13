import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import ParticipantView from './ParticipantView';
import PairTitleView from './PairTitleView';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  pairView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

function PairOverlay({ isVisible, setIsVisible }) {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
      overlayBackgroundColor={ksStyle.colors.primaryColorLight}
      height="auto"
    >
      <View style={styles.container}>
        <PairTitleView />
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
