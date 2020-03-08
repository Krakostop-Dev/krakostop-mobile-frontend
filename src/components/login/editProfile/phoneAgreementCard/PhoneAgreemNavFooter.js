import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import NavigationFooter from '../NavigationFooter';

function PhoneAgreementNavFooter() {
  const navigation = useContext(NavigationContext);

  async function onPress() {
    navigation.navigate('App');
  }

  return <NavigationFooter nextButtonOnPress={onPress} />;
}

export default PhoneAgreementNavFooter;
