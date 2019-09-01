import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
} from 'react-native';


const DataForm = () => {
    const [name, setName] = useState("Grzesiu");
    const [surName, setSurName] = useState("Tluszcz");
    const [pairId, setPairId] = useState("1337");
    return (
        <View style={formStyle.formContainer}>
            <NameInput label={"Name"} inputValue={name} onInputChange={setName}/>
            <NameInput label={"Surname"} inputValue={surName} onInputChange={setSurName}/>
            <NameInput label={"PairId"} inputValue={pairId} onInputChange={setPairId}/>
        </View>
    )
};

const NameInput = ({label, inputValue, onInputChange}) => {
    return (
        <View style={formStyle.inputContainer}>
            <View style={formStyle.inputLabelContainer}>
                <Text style={formStyle.inputLabel}>{label}</Text>
            </View>
            <TextInput
                style={formStyle.textInput}
                onChangeText={onInputChange}
                value={inputValue}
                // defaultValue={"Name"}
                // adjustsFontSizeToFit={true}
                clearTextOnFocus={true}
            />
        </View>
    )
};

export default DataForm;


const formStyle = StyleSheet.create({
    formContainer:{
        flex:1
    },
    inputContainer: {
        flex:1,
        flexDirection: "row",
        alignItems: "stretch",
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10


    },
    inputLabelContainer: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 2
    },
    textInput: {
        width: "70%",
        fontSize: 20,
        textAlign: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,

    },
    inputLabel: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'

    },

});

