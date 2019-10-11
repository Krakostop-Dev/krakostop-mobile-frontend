import React from "react";
import {AppContext} from "../../components/context/AppContext";
import SplashScreen from "./SplashScreen";

export default function SplashScreenContainer(props) {
    return (
        <AppContext.Consumer>{
            context => (
                <SplashScreen context={context} navigation={props.navigation}/>
            )}
        </AppContext.Consumer>
    );
}