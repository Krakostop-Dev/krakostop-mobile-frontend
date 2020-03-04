import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginContext } from '../../../../modules/context/LoginContext';
import NavigationFooter from '../NavigationFooter';

function PhoneAgreementNavFooter({ agreement }) {
  const navigation = useContext(NavigationContext);
  const loginContext = useContext(LoginContext);
  const { user } = loginContext;

  async function onPress() {
    // TODO: send info to server
    if (!agreement) {
      user.is_phone_visible = false;
      await loginContext.updateUser(user);
    }
    navigation.navigate('App');
  }

  return <NavigationFooter nextButtonOnPress={onPress} />;
}

export default PhoneAgreementNavFooter;

PhoneAgreementNavFooter.propTypes = {
  agreement: PropTypes.bool.isRequired,
};
