import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.5,
    width: '90%',
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flex: 1,
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
  content: {
    flex: 5,
  },
});

function EmailAuthenticationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header} />
        <View style={styles.content}>
          <Button title="KOD" onPress={() => navigation.navigate('App')} />
        </View>
      </View>
    </View>
  );
}

export default EmailAuthenticationScreen;

EmailAuthenticationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
