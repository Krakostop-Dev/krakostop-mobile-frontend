import React from 'react';
import { AppContext } from '../../components/context/AppContext';
import Profile from './ProfileComponent';

export default function ProfileScreenContainer(props) {
  return (
    <AppContext.Consumer>
      {context => <Profile context={context} navigation={props.navigation} />}
    </AppContext.Consumer>
  );
}
ProfileScreenContainer.navigationOptions = () => ({
  title: 'ProfileScreen',
  headerStyle: {
    backgroundColor: '#fff11e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
