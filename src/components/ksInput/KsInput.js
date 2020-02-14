import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const formStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
  },
  inputLabelContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 2,
  },
  textInput: {
    width: '65%',
    fontSize: 20,
    textAlign: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const KsInput = ({ label, inputValue, onInputChange }) => {
  return (
    <View style={formStyle.inputContainer}>
      <View style={formStyle.inputLabelContainer}>
        <Text style={formStyle.inputLabel}>{label}</Text>
      </View>
      <TextInput
        style={formStyle.textInput}
        onChangeText={onInputChange}
        value={inputValue}
        adjustsFontSizeToFit
        clearTextOnFocus
      />
    </View>
  );
};

export default KsInput;

KsInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
