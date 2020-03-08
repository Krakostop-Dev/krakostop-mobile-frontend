import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: { paddingHorizontal: 7, flex: 1 },
  text: { fontWeight: 'bold', fontSize: 16 },
});

function ConversationNameView({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default ConversationNameView;

ConversationNameView.propTypes = {
  name: PropTypes.string.isRequired,
};
