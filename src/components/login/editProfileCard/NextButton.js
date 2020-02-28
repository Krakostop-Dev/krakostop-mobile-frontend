import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import ButtonWithText from '../ButtonWithText';
import { LoginContext } from '../../../modules/context/LoginContext';
import config from '../../../../config/config';
import { updateProfileOnServer } from '../../../modules/communication/CommunicationMenager';

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginHorizontal: 5,
    marginTop: 0,
    alignSelf: 'flex-end',
  },
});
const BUTTON_LABEL = 'Dalej';

function NextButton({ avatar, msgLink, setError }) {
  const navigation = useContext(NavigationContext);
  const loginContext = useContext(LoginContext);

  async function onPress() {
    if (!msgLink) {
      navigation.navigate('MsgAlert', { avatar });
    } else {
      const { status, message, user } = await updateProfileOnServer(
        avatar,
        msgLink
      );
      if (status === 200) {
        user.avatar = config.baseUrl + user.avatar;
        await loginContext.updateUser(user);
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
    <ButtonWithText
      onPress={onPress}
      label={BUTTON_LABEL}
      style={styles.button}
    />
  );
}

export default NextButton;

NextButton.propTypes = {
  avatar: PropTypes.string.isRequired,
  msgLink: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
