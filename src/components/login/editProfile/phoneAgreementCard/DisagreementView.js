import React from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  text: {
    fontSize: 16,
  },
});

const DISAGREEMENT_TEXT =
  'Zaznacz, jeżeli nie udzielasz zgody na wyświetlanie twojego numeru.';

function DisagreementView({ style, disagreement, setDisagreement }) {
  return (
    <CheckBox
      containerStyle={{ ...styles.container, ...style }}
      textStyle={styles.text}
      title={DISAGREEMENT_TEXT}
      checked={disagreement}
      onPress={() => setDisagreement(!disagreement)}
      iconRight
      center
      checkedIcon="times"
      checkedColor="red"
    />
  );
}

export default DisagreementView;

DisagreementView.defaultProps = {
  style: {},
};

DisagreementView.propTypes = {
  style: ViewPropTypes.style,
  setDisagreement: PropTypes.func.isRequired,
  disagreement: PropTypes.bool.isRequired,
};
