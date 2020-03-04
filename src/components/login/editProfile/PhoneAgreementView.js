import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';
import { LoginContext } from '../../../modules/context/LoginContext';

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

function PhoneAgreementView({ label }) {
  const loginContext = useContext(LoginContext);
  const { user } = loginContext;
  const [agreement, setAgreement] = useState(
    user.is_phone_visible === undefined ? true : user.is_phone_visible
  );

  async function updateUser() {
    setAgreement(!agreement);
    // TODO: Update user on server
    user.is_phone_visible = !agreement;
    await loginContext.updateUser(user);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{label}</Text>
        <ToggleSwitch
          isOn={agreement}
          onColor="green"
          offColor="red"
          onToggle={() => updateUser()}
        />
      </View>
    </View>
  );
}

export default PhoneAgreementView;

PhoneAgreementView.propTypes = {
  label: PropTypes.string.isRequired,
};
