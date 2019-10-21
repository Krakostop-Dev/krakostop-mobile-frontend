import React, {useEffect, useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppContext} from "../../components/context/AppContext";
import {ksBasic} from "../../styles/basic/ksBasic";

const logo = require('../../../assets/krakologo2019.png');

const SplashScreen = ({navigation}) => {
    const context = useContext(AppContext);

    async function refreshLogin() {
        try {
            await context.refreshLogin();
        } catch (e) {
            console.error(e);
        }
        setTimeout(() => {
            if (context.isLoggedIn) {
                navigation.navigate('App');
            } else {
                navigation.navigate('Auth');
            }
        }, 1000);
    }


    useEffect(() => {
        refreshLogin()
    }, []);

    return (
        <View style={ksBasic.stackContainer}>
            <View style={ksBasic.stack}>
                <Image style={styles.logo} source={logo}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        resizeMode: 'contain',
        width: null,
        height: null,
    },
});
export default SplashScreen;
