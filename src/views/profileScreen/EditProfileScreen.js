import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {KsInput} from '../../components/ksInput/KsInput';
import {KsButton} from '../../components/ksButton/KsButton';
import {KsLabel} from '../../components/ksLabel/KsLabel';
import {AppContext} from '../../components/context/AppContext';
import {ksBasic} from '../../styles/basic/ksBasic';

const DEFAULT_AVATAR = require('../../../assets/avatar_google.png');

const EditProfileScreen = ({ navigation }) => {
  const context = useContext(AppContext);
  const { user } = context;
  const [first_name, setName] = useState(user.first_name);
  const [last_name, setSurname] = useState(user.last_name);
  const [pairID, setPairId] = useState('');
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  const saveUser = async () => {
    // TODO: Validate user input
    await context.updateUser({ first_name, last_name, pairID, avatar });
    navigation.navigate('App');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleStack}>
        <KsLabel labelText="Zmień swoje dane" />
      </View>
      <View style={styles.avatarStack}>
        <Avatar
            size="large"
            rounded
            source={avatar}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
        />
      </View>
      <View style={ksBasic.stack}>
        <View style={styles.inputFields}>
          <KsInput
            label="Imię"
            inputValue={first_name}
            onInputChange={setName}
          />
          <KsInput
            label="Nazwisko"
            inputValue={last_name}
            onInputChange={setSurname}
          />
          <KsInput
            label="Id Pary"
            inputValue={pairID}
            onInputChange={setPairId}
          />
        </View>
        <KsButton buttonText="Zapisz" onPress={saveUser} />
      </View>

    </View>
  );
};

export default EditProfileScreen;

EditProfileScreen.navigationOptions = () => ({
  title: 'Edit Profile',
});

const styles = StyleSheet.create({
  container: {
    ...ksBasic.stackContainer,
    flexDirection: 'column',
  },
  avatarStack: {
    ...ksBasic.stack,
    alignItems: 'center',
    flex: 0.2
  },
  titleStack: {
    ...ksBasic.stack,
    flex: 0.2
  },
  inputFields: {
    flex: 1,
  },
});
