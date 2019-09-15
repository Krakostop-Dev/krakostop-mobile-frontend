import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreenComponent from './src/views/loginScreen/LoginComponent';
import {AppContext} from './src/components/UserContext'

export default function App(props) {
  const initialState ={
    user : {
      name: "Krzysiek",
      test: "Zajebiscie dziala"
    }
  };
  return (
     <AppContext.Provider value = { initialState }>
        <AppContext.Consumer>{
          user =>
              <View style={styles.container}>
                <LoginScreenComponent {...user} {...props}/>
              </View>
        }
         </AppContext.Consumer>
       </AppContext.Provider>

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
