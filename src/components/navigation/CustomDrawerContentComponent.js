import {
  Container,
  Content,
  Header,
  Left,
  ListItem,
} from 'native-base';
import { ksStyle } from '../../styles/basic/ksBasic';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';
import * as _  from 'lodash';

export default props => {
  const loginContext = useContext(LoginContext);
  const userName = `${loginContext.user.first_name} ${loginContext.user.last_name}`;
  return (
    <Container>
      <Header span style={styles.headerSpan}>
        <Image
          source={ksStyle.logo.source}
          resizeMode="contain"
          style={styles.logo}
        />
      </Header>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Avatar rounded source={loginContext.user.avatar} size="medium" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{userName}</Text>
            <Text>miejsce {loginContext.user.rank}</Text>
          </View>
        </Left>
      </Header>
      <Content>
        <FlatList
          data={[
            { label: 'Co zabrać', icon: require("../../../assets/icons/backpack.png")  },
            { label: 'Partnerzy', icon: require("../../../assets/icons/partners.png") },
            { label: 'Pakiet startowy', icon: require("../../../assets/icons/bag.png") },
            { label: 'Kontakt', icon: require("../../../assets/icons/contact.png" )},
            { label: 'O aplikacji', icon: require("../../../assets/icons/info.png") },
            { label: 'Wyloguj', icon: require("../../../assets/icons/logout.png"), style: {color: 'rgba(253, 0, 0, 0.65)'} },
          ]}
          renderItem={({ item }) => (
            <ListItem id>
                <Image style={ styles.icon} source={item.icon}/>
                <Text style={_.assign({} , styles.item, item.style)}>{item.label}</Text>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  headerSpan: {
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginTop: 20,
  },
  header: {
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
      marginLeft: 10,

  },
  icon: {
      width: 40,
      height: 40,
  }
});
