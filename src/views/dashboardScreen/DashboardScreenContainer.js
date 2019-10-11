import React from "react";
import {AppContext} from "../../components/context/AppContext";
import DashboardScreen from "./DashboardScreen";

export default function DashboardScreenContainer(props) {
    return (
        <AppContext.Consumer>{
            context => (
                <DashboardScreen context={context} navigation={props.navigation}/>
            )}
        </AppContext.Consumer>
    );
}