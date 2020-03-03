import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../../../../styles/basic/ksBasic';
import ErrorMessages from '../../../../../modules/ErrorMessages';

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

function ResignInput({ setError, setResigned, setDisplayMsgAlert }) {
  const navigation = useContext(NavigationContext);

  async function onChangeText(authCode) {
    setError({
      isError: false,
      message: ErrorMessages.TYPO,
    });
    if (authCode.toLowerCase() === RESIGN_LABEL.toLowerCase()) {
      setResigned(true);
      navigation.navigate('EditProfile3');
      setDisplayMsgAlert(false);
    } else if (authCode.length === RESIGN_LABEL.length) {
      setError({
        isError: true,
        message: ErrorMessages.TYPO,
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

export default ResignInput;

ResignInput.propTypes = {
  setError: PropTypes.func.isRequired,
  setResigned: PropTypes.func.isRequired,
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
