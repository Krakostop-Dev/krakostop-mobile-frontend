import React from "react";
import {StyleSheet, Text, View} from "react-native";

const DashboardScreen = ({context}) => {
    return (
        <View style={styles.colsContainer}>
            <View style={styles.sideColumn}/>
            <View style={styles.middleColumn}>
                <Text style={styles.mainText}>
                    Dashboard
                </Text>
            </View>
            <View style={styles.sideColumn}/>
        </View>
    )
};

const styles = StyleSheet.create({
    colsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8FC6B1',
    },
    middleColumn: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sideColumn: {
        flex: 1,
    },
    mainText: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default DashboardScreen;
