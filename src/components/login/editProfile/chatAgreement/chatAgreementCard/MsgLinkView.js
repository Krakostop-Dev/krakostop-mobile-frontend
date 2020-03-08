import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../../styles/basic/ksBasic';
import Messages from '../../../../../modules/Messages';
import SmallInfoText from '../../../../SmallInfoText';
import {
  checkFormatValidity,
  checkProfileValidity,
} from '../../../../../modules/MessengerLinkValidator';

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
const EDIT_ICON = require('../../../../../../assets/icons/edit.png');

const PHONE_SUCCESSFULLY_UPDATED = 'Pomyślnie połączono z messengerem';

function MsgLinkView({
  style,
  msgLink,
  setMsgLink,
  isFormatValid,
  setFormatValidity,
}) {
  // const { user, updateUser } = useContext(LoginContext);

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  const [success, isSuccess] = useState(false);
  async function onSubmit() {
    isSuccess(false);
    setError({ isError: false, message: '' });
    setFormatValidity(checkFormatValidity(msgLink));
    if (isFormatValid) {
      await checkProfileValidity(msgLink);
      /*      const { status, message } = await updateProfileOnServer({
        msgLink,
      });
      if (status === 200) {
        isSuccess(true);
        user.phone = msgLink;
        await updateUser(user);
      } else
        setError({
          isError: true,
          message,
        }); */
    } else {
      setError({
        isError: true,
        message: Messages.MSG_LINK_FORMAT,
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
          value={msgLink}
          onChangeText={setMsgLink}
          editable
          placeholderTextColor="rgba(0, 0, 0, 0.6)"
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

export default MsgLinkView;

MsgLinkView.defaultProps = {
  style: {},
};

MsgLinkView.propTypes = {
  style: ViewPropTypes.style,
  setMsgLink: PropTypes.func.isRequired,
  msgLink: PropTypes.string.isRequired,
  isFormatValid: PropTypes.bool.isRequired,
  setFormatValidity: PropTypes.func.isRequired,
};
