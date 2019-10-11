import {AppContext} from "../../components/context/AppContext";
import Profile from "./ProfileComponent";
import React from "react";

export default function ProfileScreenContainer(props) {
    return (
            <AppContext.Consumer>{
                context => (
                    <Profile context={context} navigation={props.navigation}/>
                )}
            </AppContext.Consumer>
    );
}
ProfileScreenContainer.navigationOptions = ({navigation}) => ({
    title: 'ProfileScreen',
    headerStyle: {
        backgroundColor: '#fff11e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        textAlign: 'right',
        fontWeight: 'bold',
    },
});