import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableWithoutFeedback
} from 'react-native';
import DataForm from './dataForm/DataForm'
import {User} from "./User";


const Profile = ({user, updateUser}) => {
    return (
        <View style={columns.container}>
            <SideColumn/>
            <MiddleColumn user={user} upadteUser={updateUser}/>
            <SideColumn/>
        </View>
    );
};

const SideColumn = () => {
    return (<View style={columns.side}/>);
};

const MiddleColumn = ({user, upadteUser}) => {

    const [name, setName] = useState("Marian");
    const [surName, setSurname] = useState("Barian");
    const [pairID, setPairId] = useState("123");

    return (

        <View style={columns.middle}>
            <View style={elements.textContainer}><Text style={elements.mainText}>Wpisz lub zamień swoje
                dane</Text></View>
            <View style={elements.inputForm}><DataForm name={name} setName={setName}
                                                       surName={surName} setSurname={setSurname}
                                                       paiId={pairID} setPairId={setPairId}
            /></View>
            <View style={elements.textContainer}>
                <TouchableWithoutFeedback onPress={() => upadteUser(new User(name, surName, pairID))}>
                    <Text style={elements.mainText}>Dalej</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>);
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",

    },
    mainText: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
        borderWidth: 2,
        borderRadius: 10
    },
    inputForm: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },
    proceedBtn: {
        flex: 0.5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

});



