import React from 'react';
import {
    View,
    StyleSheet,
    Text, Image
} from 'react-native';
import DataForm from './dataForm/DataForm'

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
    return (
        <View style={columns.middle}>
            <View style={elements.textContainer}><Text style={elements.mainText}>Fill Additional Details</Text></View>
            <View style={elements.inputForm}><DataForm/></View>
            <View style={elements.imageContainer}><Image style={elements.thumbUpIcon} source={thumbUp}/></View>
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
    thumbUpIcon: {
        flex: 0.5,
        resizeMode: 'contain',
    }


});
