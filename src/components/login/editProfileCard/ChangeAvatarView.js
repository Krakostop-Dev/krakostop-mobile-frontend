/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import EditButton from '../../EditButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    marginTop: 10,
  },
  label_container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit_button: {
    height: 25,
    width: 25,
  },
  label: {
    marginRight: 5,
    fontSize: 18,
  },
});
const LABEL = 'Wgraj avatar';
function ChangeAvatarView() {
  return (
    <View style={styles.container}>
      <Avatar rounded size="xlarge" containerStyle={styles.avatar} />
      <View style={styles.label_container}>
        <Text style={styles.label}>{LABEL}</Text>
        <EditButton
          onPress={() => alert('CHANGE AVATAR')}
          style={styles.edit_button}
        />
      </View>
    </View>
  );
}

export default ChangeAvatarView;

ChangeAvatarView.propTypes = {};
