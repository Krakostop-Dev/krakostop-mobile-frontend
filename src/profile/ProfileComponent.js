import React from 'react';
import {
    View,
    StyleSheet,
    Text, Image, TouchableWithoutFeedback
} from 'react-native';
import DataForm from './dataForm/DataForm'
import {User} from "./User";

const thumbUp = require('../../assets/hand.png');


const Profile = () => {

    return (
        <View style={columns.container}>
            <SideColumn/>
            <MiddleColumn/>
            <SideColumn/>
        </View>
    );
};

const SideColumn = () => {
    return (<View style={columns.side}/>);
};

const MiddleColumn = () => {
    let usr = new User("Marian", "Karian", 123);
    const _popUp = () => {
        alert(usr.toString());
    };

    return (

        <View style={columns.middle}>
            <View style={elements.textContainer}><Text style={elements.mainText}>Uzupełnij dodatkowe
                informacje</Text></View>
            <View style={elements.inputForm}><DataForm user={usr}/></View>
            <View style={elements.textContainer}>
                <TouchableWithoutFeedback onPress={_popUp}>
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



