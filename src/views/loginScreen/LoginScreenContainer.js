import React from 'react';
import {AppContext, UserContextProvider} from "../../components/context/AppContext";
import {StyleSheet, View} from "react-native";
import LoginScreenComponent from "./LoginComponent";

export default function LoginScreenContainer() {
    return (
        <UserContextProvider>
            <AppContext.Consumer>{
                context => (
                    <View style={styles.container}>
                        <LoginScreenComponent {...context} />
                    </View>
                )}
            </AppContext.Consumer>
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

