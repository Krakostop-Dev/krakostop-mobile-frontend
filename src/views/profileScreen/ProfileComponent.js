import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import DataForm from './dataForm/DataForm';

const Profile = ({ context, updateUser, navigation }) => {
  console.log(context.user);
  return (
    <View style={columns.container}>
      <SideColumn />
      <MiddleColumn
        user={context.user}
        updateUser={updateUser}
        navigation={navigation}
      />
      <SideColumn />
    </View>
  );
};

const SideColumn = () => {
  return <View style={columns.side} />;
};

const MiddleColumn = ({ user, updateUser, navigation }) => {
  const [name, setName] = useState(user.first_name);
  const [surName, setSurname] = useState(user.last_name);
  const [pairID, setPairId] = useState('');

  return (
    <View style={columns.middle}>
      <View style={elements.textContainer}>
        <Text style={elements.mainText}>Wpisz lub zamień swoje dane</Text>
      </View>
      <View style={elements.inputForm}>
        <DataForm
          name={name}
          setName={setName}
          surName={surName}
          setSurname={setSurname}
          paiId={pairID}
          setPairId={setPairId}
        />
      </View>
      <View style={elements.textContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('App')}>
          <Text style={elements.mainText}>Dalej</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Profile;

const columns = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8FC6B1',
  },
  middle: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  side: {
    flex: 1,
  },
});

const elements = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  mainText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
  },
  inputForm: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedBtn: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
