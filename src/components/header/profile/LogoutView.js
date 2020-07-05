import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../../../../assets/Images';

const styles = StyleSheet.create({
  opacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: { width: 35, height: 35, marginRight: 8 },
  text: { color: 'red', fontSize: 17 },
});

function LogoutView() {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.opacity}>
      <Image source={Images.icons.logout} style={styles.image} />
      <Text style={styles.text}>Wyloguj</Text>
    </TouchableOpacity>
  );
}

export default LogoutView;
