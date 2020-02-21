import { StyleSheet, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  content: {
    flex: 5,
    alignItems: 'center',
  },
});

function AuthOverlayContent({ children, style }) {
  return <View style={{ ...styles.content, ...style }}>{children}</View>;
}

export default AuthOverlayContent;

AuthOverlayContent.defaultProps = {
  children: null,
  style: {},
};
AuthOverlayContent.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};
