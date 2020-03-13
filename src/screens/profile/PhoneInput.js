import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  ViewPropTypes,
} from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../modules/context/LoginContext';
import SmallInfoText from '../../components/SmallInfoText';
import Messages from '../../modules/Messages';
import { updateProfileOnServer } from '../../modules/communication/CommunicationMenager';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    ...ksStyle.input,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  input: {
    fontSize: ksStyle.input.fontSize,
  },

  button: {
    width: 25,
    height: 25,
  },
});
const EDIT_ICON = require('../../../assets/icons/edit.png');

const NUMBER_LENGTH = 9;
const PHONE_SUCCESSFULLY_UPDATED = 'Zaktualizowano numer telefonu';

function PhoneInput({ style }) {
  const { user, updateUser } = useContext(LoginContext);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });
  const [success, isSuccess] = useState(false);
  async function onSubmit() {
    isSuccess(false);
    setError({ isError: false, message: '' });
    if (phoneNumber.length === NUMBER_LENGTH) {
      const { status, message } = await updateProfileOnServer({ phoneNumber });
      if (status === 200) {
        isSuccess(true);
        user.phone = phoneNumber;
        await updateUser(user);
      } else
        setError({
          isError: true,
          message,
        });
    } else {
      setError({
        isError: true,
        message: Messages.TO_SHORT_PHONE_NUMBER,
      });
    }
  }
  return (
    <View>
      <View
        style={[
          styles.container,
          style,
          hasErrorOccurred.isError ? { borderColor: 'red' } : null,
          success ? { borderColor: 'green' } : null,
        ]}
      >
        <TextInput
          style={[
            styles.input,
            hasErrorOccurred.isError ? { color: 'red' } : null,
            success ? { color: 'green' } : null,
          ]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={NUMBER_LENGTH}
          editable
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
          autoCompleteType="tel"
          keyboardType="number-pad"
          onSubmitEditing={onSubmit}
        />
        <Image style={styles.button} source={EDIT_ICON} />
      </View>
      {hasErrorOccurred.isError ? (
        <SmallInfoText text={hasErrorOccurred.message} color="red" />
      ) : null}
      {success ? (
        <SmallInfoText text={PHONE_SUCCESSFULLY_UPDATED} color="green" />
      ) : null}
    </View>
  );
}

export default PhoneInput;

PhoneInput.defaultProps = {
  style: {},
};

PhoneInput.propTypes = {
  style: ViewPropTypes.style,
};
