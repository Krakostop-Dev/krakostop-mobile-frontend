import React from 'react';
import {StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import PropTypes from 'prop-types';
import {ksStyle} from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  overlay: {
    padding: 0,
    maxHeight: '90%',
  },
});

function KSOverlay({isVisible, setIsVisible, children}) {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
      overlayBackgroundColor={ksStyle.colors.primaryColorLight}
      height="auto"
      overlayStyle={styles.overlay}
      borderRadius={3}
    >
      {children}
    </Overlay>
  );
}

export default KSOverlay;

KSOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
