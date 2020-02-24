import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  input: {
    ...ksStyle.input,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    alignSelf: 'center',
  },
});
const CODE_INPUT_PLACEHOLDER = 'rezygnuje';
const RESIGN_LABEL = 'rezygnuje';

function ResignInput() {
  const navigation = useContext(NavigationContext);

  async function onChangeText(authCode) {
    if (authCode.toLowerCase() === RESIGN_LABEL.toLowerCase()) {
      navigation.navigate('App');
    }
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={CODE_INPUT_PLACEHOLDER}
      onChangeText={onChangeText}
      maxLength={RESIGN_LABEL.length}
      disabled
      placeholderTextColor="rgba(0, 0, 0, 0.2)"
    />
  );
}

export default ResignInput;
