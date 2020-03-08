import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContext } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const IconComponent = MaterialIcons;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    flexDirection: 'row',
  },
  title: {
    flex: 2,
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
  },
  left: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    padding: 10,
    margin: 10,
  },
});

function CardHeaderWithBackButton({ title, style }) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={{ ...style, ...styles.header }}>
      <View style={styles.left}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          icon={<IconComponent name="arrow-back" size={40} color="white" />}
          type="clear"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <Image
          source={ksStyle.logo.source}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default CardHeaderWithBackButton;

CardHeaderWithBackButton.propTypes = {
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};
CardHeaderWithBackButton.defaultProps = {
  style: {},
};
