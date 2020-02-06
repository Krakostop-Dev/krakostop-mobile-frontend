import { Image, StyleSheet, Text, View } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';

export default ({ style }) => {
  const loginContext = useContext(LoginContext);
  const userName = `${loginContext.user.first_name} ${loginContext.user.last_name}`;
  return (
    <View span style={style}>
      <Image
        source={ksStyle.logo.source}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.profile}>
        <Avatar rounded source={loginContext.user.avatar} size="medium" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.name}>{userName}</Text>
          <Text>miejsce {loginContext.user.rank}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    flex: 3,
    width: undefined,
    height: undefined,
    marginTop: 20,
  },
  profile: {
    flex: 2,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
