import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';
import { ksStyle } from '../../styles/basic/ksBasic';
import SmallInfoText from '../../components/SmallInfoText';
import PhoneInput from './PhoneInput';
import PhoneAgreementView from '../../components/login/editProfile/PhoneAgreementView';

const styles = StyleSheet.create({
  input_form: {
    marginBottom: 8,
    width: '100%',
  },
  input_label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 10,
  },
  input: {
    ...ksStyle.input,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  edit_button: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  facebook_label_container: {
    flexDirection: 'row',
  },
});
const EMAIL_LABEL = 'Email';
const PHONE_LABEL = 'Numer telefonu';
const PHONE_AGREEMENT_LABEL = 'Wyświetl numer pozostałym uczestnikom wyścigu.';

export default () => {
  const { user } = useContext(LoginContext);
  // eslint-disable-next-line no-unused-vars
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });
  return (
    <View style={styles.input_form}>
      <Text style={styles.input_label}>{EMAIL_LABEL}</Text>
      <TextInput
        style={styles.input}
        defaultValue={user.email}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
        editable={false}
      />
      <Text style={styles.input_label}>{PHONE_LABEL}</Text>
      <PhoneInput />
      <PhoneAgreementView label={PHONE_AGREEMENT_LABEL} setError={setError} />
      {hasErrorOccurred.isError ? (
        <SmallInfoText text={hasErrorOccurred.message} color="red" />
      ) : null}
    </View>
  );
};
