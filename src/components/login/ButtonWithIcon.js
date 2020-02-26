import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewPropTypes,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    flexDirection: 'row',
  },
  button_image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  button_label: {
    color: 'white',
    fontSize: 16,
  },
});

function ButtonWithIcon({ onPress, style, icon, label }) {
  return (
    <TouchableHighlight
      onPress={() => onPress()}
      style={{ ...styles.button_container, ...style }}
    >
      <View style={styles.button}>
        <Image source={icon} style={styles.button_image} />
        <Text style={styles.button_label}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ButtonWithIcon;

ButtonWithIcon.defaultProps = {
  style: {},
};
ButtonWithIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
