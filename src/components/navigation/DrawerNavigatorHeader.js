import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../modules/context/LoginContext';

const styles = StyleSheet.create({
  logo: {
    flex: 3,
    width: undefined,
    height: undefined,
    marginTop: 20,
  },
  profile_button: {
    flex: 2,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 20,
    margin: 10,
    padding: 3,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const DrawerNavigatorHeader = ({ style, navigation }) => {
  const loginContext = useContext(LoginContext);
  const userName = `${loginContext.user.first_name} ${loginContext.user.last_name}`;
  return (
    <View span style={style}>
      <Image
        source={ksStyle.logo.source}
        resizeMode="contain"
        style={styles.logo}
      />
      <TouchableHighlight
        style={styles.profile_button}
        onPress={() => navigation.navigate('Profile')}
      >
        <View style={styles.profile}>
          <Avatar rounded source={loginContext.user.avatar} size="medium" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{userName}</Text>
            <Text>miejsce {loginContext.user.rank}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default DrawerNavigatorHeader;

DrawerNavigatorHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  style: PropTypes.shape({}).isRequired,
};
