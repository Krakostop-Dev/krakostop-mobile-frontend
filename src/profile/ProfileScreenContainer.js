import {AppContext, AppContextProvider} from "../components/context/AppContext";
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
