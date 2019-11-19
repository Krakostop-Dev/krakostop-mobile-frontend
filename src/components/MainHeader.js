import React, {useContext} from "react";
import {Button, Header} from 'react-native-elements';
import {MaterialIcons} from "@expo/vector-icons";
import { NavigationContext } from 'react-navigation';
let IconComponent = MaterialIcons;

const MainHeader = () =>{
    const navigation = useContext(NavigationContext);
    return (<Header
      leftComponent={<Button
          onPress={() => navigation.openDrawer()}
          icon={
              <IconComponent name={"menu"} size={25} />
          }
      />}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
  />)
};

export default MainHeader;