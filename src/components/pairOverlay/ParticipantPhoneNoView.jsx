import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  redirectToPhoneApp,
  formatPhoneNumber,
} from '../../modules/PhoneManager';
import { ksStyle } from '../../styles/basic/ksBasic';
import Images from '../../../assets/Images';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: ksStyle.font.base,
    fontSize: 16,
    flexShrink: 1,
    color: 'white',
  },
  icon: {
    width: 35,
    height: 35,
  },
  number: {
    paddingVertical: 5,
    paddingLeft: 1,
    paddingRight: 10,
  },
});

function ParticipantPhoneNoView({ phone }) {
  const formattedPhone = formatPhoneNumber(phone);

  async function onPress() {
    await redirectToPhoneApp(phone);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.icon} source={Images.icons.phone} />
      <View style={styles.number}>
        <Text style={styles.text} numberOfLines={1}>
          {formattedPhone}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ParticipantPhoneNoView;

ParticipantPhoneNoView.propTypes = {
  phone: PropTypes.string.isRequired,
};
