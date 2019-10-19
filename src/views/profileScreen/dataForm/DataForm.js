import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const DataForm = ({ name, setName, surName, setSurname, paiId, setPairId }) => {
  return (
    <View style={formStyle.formContainer}>
      <DetailsInput label="Imię" inputValue={name} onInputChange={setName} />
      <DetailsInput
        label="Nazwisko"
        inputValue={surName}
        onInputChange={setSurname}
      />
      <DetailsInput
        label="Id Pary"
        inputValue={paiId}
        onInputChange={setPairId}
      />
    </View>
  );
};

const DetailsInput = ({ label, inputValue, onInputChange }) => {
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

export default DataForm;

const formStyle = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
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
