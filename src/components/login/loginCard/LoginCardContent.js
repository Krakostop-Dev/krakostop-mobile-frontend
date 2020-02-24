import { StyleSheet, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  content: {
    flex: 5,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
});

function LoginCardContent({ children, style }) {
  return <View style={{ ...styles.content, ...style }}>{children}</View>;
}

export default LoginCardContent;

LoginCardContent.defaultProps = {
  children: null,
  style: {},
};
LoginCardContent.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};
