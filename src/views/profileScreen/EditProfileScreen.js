import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {KsInput} from "../../components/ksInput/KsInput";
import {KsButton} from "../../components/ksButton/KsButton";
import {KsLabel} from "../../components/ksLabel/KsLabel";
import {AppContext} from "../../components/context/AppContext";
import {ksBasic} from "../../styles/basic/ksBasic";
import DashboardScreen from "../dashboardScreen/DashboardScreen";

const EditProfileScreen = ({navigation}) => {
    const context = useContext(AppContext);
    const user = context.user;
    const [first_name, setName] = useState(user.first_name);
    const [last_name, setSurname] = useState(user.last_name);
    const [pairID, setPairId] = useState('');
    return (
        <View style={ksBasic.stackContainer}>
            <View style={ksBasic.stack}>

                <KsLabel labelText={"Zmień swoje dane"}/>

                <View style={elements.inputFields}>
                    <KsInput label="Imię" inputValue={first_name} onInputChange={setName}/>
                    <KsInput label="Nazwisko" inputValue={last_name} onInputChange={setSurname}/>
                    <KsInput label="Id Pary" inputValue={pairID} onInputChange={setPairId}/>
                </View>

                <KsButton buttonText={"Zapisz"} onPress={() => {
                    context.updateUser({first_name, last_name});
                    navigation.navigate('DashboardScreen')
                }}/>

            </View>
        </View>
    );
};

export default EditProfileScreen;

EditProfileScreen.navigationOptions = () => ({
    title: 'Edit Profile',
});

const elements = StyleSheet.create({
    inputFields: {
        flex: 1,
    },
});
