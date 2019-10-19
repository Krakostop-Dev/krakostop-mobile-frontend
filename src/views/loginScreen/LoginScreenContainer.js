import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppContext,
  AppContextProvider,
} from '../../components/context/AppContext';
import LoginScreenComponent from './LoginComponent';

export default function LoginScreenContainer(props) {
  return (
    <AppContext.Consumer>
      {context => (
        <View style={styles.container}>
          <LoginScreenComponent
            context={context}
            navigation={props.navigation}
          />
        </View>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
