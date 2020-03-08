import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../styles/basic/ksBasic';
import InfoText from '../../InfoText';
import ButtonWithText from '../../../buttons/ButtonWithText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    backgroundColor: ksStyle.colors.primaryColorLight,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 150,
    marginTop: 10,
  },
});
const BUTTON_LABEL = 'OK';

function ErrorOverlay({ style, navigation }) {
  const errorMessage = navigation.getParam('errorMessage');
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.content}>
        <InfoText infoText={errorMessage} />
        <ButtonWithText
          label={BUTTON_LABEL}
          onPress={navigation.goBack}
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

export default ErrorOverlay;

ErrorOverlay.defaultProps = {
  style: {},
};

ErrorOverlay.propTypes = {
  style: ViewPropTypes.style,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
