import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
} from 'react-native';




const DataForm = ({user}) => {
    const [name, setName] = useState(user.name);
    const [surName, setSurName] = useState("Surname");
    const [pairId, setPairId] = useState("PairId");
    return (
        <View style={formStyle.formContainer}>
            <DetailsInput label={"Imię"} inputValue={user.name} onInputChange={ev => user.name=user.name+ev}/>
            <DetailsInput label={"Nazwisko"} inputValue={surName} onInputChange={setSurName}/>
            <DetailsInput label={"Id Pary"} inputValue={pairId} onInputChange={setPairId}/>
        </View>
    )
};

const DetailsInput = ({label, inputValue, onInputChange}) => {
    return (
        <View style={formStyle.inputContainer}>
            <View style={formStyle.inputLabelContainer}>
                <Text style={formStyle.inputLabel}>{label}</Text>
            </View>
            <TextInput
                style={formStyle.textInput}
                onChangeText={onInputChange}
                value={inputValue}
                adjustsFontSizeToFit={true}
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
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 2
    },
    textInput: {
        width: "65%",
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

