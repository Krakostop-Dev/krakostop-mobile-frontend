/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import EditButton from '../../EditButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label_container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit_button: {
    position: 'absolute',
    top: 50,
    right: -5,
  },
  label: {
    marginRight: 5,
    fontSize: 18,
  },
});
function ChangeAvatarView() {
  return (
    <View style={styles.container}>
      <Avatar rounded size="large" containerStyle={styles.avatar} />
      <EditButton
        onPress={() => alert('CHANGE AVATAR')}
        style={styles.edit_button}
        rounded
      />
    </View>
  );
}

export default ChangeAvatarView;

ChangeAvatarView.propTypes = {};
