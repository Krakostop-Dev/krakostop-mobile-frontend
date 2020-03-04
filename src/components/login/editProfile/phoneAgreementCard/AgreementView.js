import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

const AGREEMENT_TEXT =
  'Jeżeli nie chcesz, żeby twój numer był widoczny, naciśnij przycisk obok.';

function AgreementView({ agreement, setAgreement }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{AGREEMENT_TEXT}</Text>
        <ToggleSwitch
          isOn={agreement}
          onColor="green"
          offColor="red"
          onToggle={() => setAgreement(!agreement)}
        />
      </View>
    </View>
  );
}

export default AgreementView;

AgreementView.propTypes = {
  setAgreement: PropTypes.func.isRequired,
  agreement: PropTypes.bool.isRequired,
};
