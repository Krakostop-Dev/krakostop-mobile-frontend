import React from 'react';
import {UserContext, UserContextProvider} from "../../components/UserContext";
import {StyleSheet, View} from "react-native";
import LoginScreenComponent from "./LoginComponent";

export default function LoginScreenContainer() {
    return(
        <UserContextProvider>
            <UserContext.Consumer>{
                user => (
                    <View style = {styles.container}>
                        <LoginScreenComponent {...user} />
                    </View>
                )}
            </UserContext.Consumer>
        </UserContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

