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
            { label: 'Co zabrać' },
            { label: 'Partnerzy' },
            { label: 'Pakiet startowy' },
            { label: 'Kontakt' },
            { label: 'O aplikacji' },
            { label: 'Wyloguj' },
          ]}
          renderItem={({ item }) => (
            <ListItem id>
              <Text style={styles.item}>{item.label}</Text>
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
  },
});
