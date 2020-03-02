import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../../styles/basic/ksBasic';
import { LoginContext } from '../../../modules/context/LoginContext';
import config from '../../../../config/config';
import { updateProfileOnServer } from '../../../modules/communication/CommunicationMenager';

const styles = StyleSheet.create({
  input: {
    ...ksStyle.input,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    alignSelf: 'center',
  },
});
const RESIGN_LABEL = 'rezygnuje';

function ResignInput({ avatar, setError }) {
  const navigation = useContext(NavigationContext);
  const loginContext = useContext(LoginContext);

  async function onChangeText(authCode) {
    if (authCode.toLowerCase() === RESIGN_LABEL.toLowerCase()) {
      const { status, message, user } = await updateProfileOnServer({ avatar });
      if (status === 200) {
        if (user) {
          user.avatar = { uri: config.baseUrl + user.avatar };
          await loginContext.updateUser(user);
        }
        navigation.navigate('App');
      } else {
        setError({
          isError: true,
          message,
        });
      }
    }
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={RESIGN_LABEL}
      onChangeText={onChangeText}
      maxLength={RESIGN_LABEL.length}
      disabled
      placeholderTextColor="rgba(0, 0, 0, 0.2)"
    />
  );
}

export default ResignInput;

ResignInput.propTypes = {
  avatar: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
