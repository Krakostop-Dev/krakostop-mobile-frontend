import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../../../../styles/basic/ksBasic';
import Messages from '../../../../../modules/Messages';

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

function ResignationInput({ setError, setResigned, setDisplayMsgAlert }) {
  const navigation = useContext(NavigationContext);

  async function onChangeText(authCode) {
    setError({
      isError: false,
      message: Messages.TYPO,
    });
    if (authCode.toLowerCase() === RESIGN_LABEL.toLowerCase()) {
      setResigned(true);
      navigation.navigate('EditProfile3');
      setDisplayMsgAlert(false);
    } else if (authCode.length === RESIGN_LABEL.length) {
      setError({
        isError: true,
        message: Messages.TYPO,
      });
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

export default ResignationInput;

ResignationInput.propTypes = {
  setError: PropTypes.func.isRequired,
  setResigned: PropTypes.func.isRequired,
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
