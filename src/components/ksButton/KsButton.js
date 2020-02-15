import React from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksBasic } from '../../styles/basic/ksBasic';

const elements = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

const KsButton = ({ buttonText, onPress }) => {
  return (
    <View style={elements.textContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={ksBasic.mediumText}>{buttonText}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default KsButton;

KsButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
