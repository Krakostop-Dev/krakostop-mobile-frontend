import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../../styles/basic/ksBasic';
import { checkFormatValidity } from '../../../../../modules/MessengerManager';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    ...ksStyle.input,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
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

function FacebookProfileLinkView({
  style,
  fbLink,
  setFbLink,
  setFbLinkFormatValidity,
  hasErrorOccurred,
}) {
  function onSubmit() {
    setFbLinkFormatValidity(checkFormatValidity(fbLink));
  }
  return (
    <View>
      <View
        style={[
          styles.container,
          style,
          hasErrorOccurred.isError ? { borderColor: 'red' } : null,
        ]}
      >
        <View style={{ width: '90%' }}>
          <TextInput
            style={[
              styles.input,
              hasErrorOccurred.isError ? { color: 'red' } : null,
            ]}
            value={fbLink}
            onChangeText={setFbLink}
            editable
            placeholderTextColor="rgba(0, 0, 0, 0.6)"
            onSubmitEditing={onSubmit}
          />
        </View>
        <Image style={styles.button} source={EDIT_ICON} />
      </View>
    </View>
  );
}

export default FacebookProfileLinkView;

FacebookProfileLinkView.defaultProps = {
  style: {},
};

FacebookProfileLinkView.propTypes = {
  style: ViewPropTypes.style,
  hasErrorOccurred: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
  }).isRequired,
  fbLink: PropTypes.string.isRequired,
  setFbLink: PropTypes.func.isRequired,
  setFbLinkFormatValidity: PropTypes.func.isRequired,
};
