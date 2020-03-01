import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContext } from 'react-navigation';
import ButtonWithText from '../ButtonWithText';

const BUTTON_LABEL = 'Wróć i połącz';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 150,
  },
});

function BackButton() {
  const navigation = useContext(NavigationContext);
  function onPress() {
    navigation.goBack();
  }
  return (
    <ButtonWithText
      label={BUTTON_LABEL}
      onPress={onPress}
      style={styles.button}
    />
  );
}

export default BackButton;
