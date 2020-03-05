import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import { ksStyle } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../modules/context/LoginContext';
import EditButton from '../../components/buttons/EditButton';

const styles = StyleSheet.create({
  form: {
    width: '100%',
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    padding: 20,
  },
  input_label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    padding: 10,
    fontSize: 16,
    marginBottom: 5,
  },
  edit_button: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
  facebook_label_container: {
    flexDirection: 'row',
  },
});

export default () => {
  const { user } = useContext(LoginContext);
  return (
    <View style={styles.form}>
      <Text style={styles.input_label}>Email</Text>
      <TextInput
        style={styles.input}
        defaultValue={user.email}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
      />
      <Text style={styles.input_label}>Numer telefonu</Text>
      <TextInput
        style={styles.input}
        defaultValue={user.phone_number}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
      />
      <View style={styles.facebook_label_container}>
        <Text style={styles.input_label}>Link do profilu Facebook</Text>
        <EditButton
          style={styles.edit_button}
          onPress={() => {
            // eslint-disable-next-line no-undef
            alert('Change facebook');
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        defaultValue={user.facebook_link}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
      />
    </View>
  );
};
