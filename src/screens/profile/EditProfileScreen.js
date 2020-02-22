import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import KsInput from '../../components/ksInput/KsInput';
import KsButton from '../../components/ksButton/KsButton';
import KsLabel from '../../components/ksLabel/KsLabel';
import { LoginContext } from '../../modules/context/LoginContext';
import { ksBasic } from '../../styles/basic/ksBasic';

const DEFAULT_AVATAR = require('../../../assets/avatar_google.png');

const styles = StyleSheet.create({
  container: {
    ...ksBasic.stackContainer,
    flexDirection: 'column',
  },
  avatarStack: {
    ...ksBasic.stack,
    alignItems: 'center',
    flex: 0.2,
  },
  titleStack: {
    ...ksBasic.stack,
    flex: 0.2,
  },
  inputFields: {
    flex: 1,
  },
});

const EditProfileScreen = ({ navigation }) => {
  const context = useContext(LoginContext);
  const { user } = context;
  const [firstName, setName] = useState(user.first_name);
  const [lastName, setSurname] = useState(user.last_name);
  const [pairID, setPairId] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);

  const saveUser = async () => {
    // TODO: Validate user input
    await context.updateUser({
      first_name: firstName,
      last_name: lastName,
      pairID,
      avatar,
    });
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
            inputValue={firstName}
            onInputChange={setName}
          />
          <KsInput
            label="Nazwisko"
            inputValue={lastName}
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

EditProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
