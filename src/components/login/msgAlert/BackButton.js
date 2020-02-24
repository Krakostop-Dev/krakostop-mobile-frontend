import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import ButtonWithText from '../ButtonWithText';

const BUTTON_LABEL = 'Wróć i połącz';

function BackButton() {
  const navigation = useContext(NavigationContext);
  function onPress() {
    navigation.goBack();
  }
  return <ButtonWithText label={BUTTON_LABEL} onPress={onPress} />;
}

export default BackButton;
