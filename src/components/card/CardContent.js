import { StyleSheet, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  content: {
    width: '90%',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

function CardContent({ children, style }) {
  return <View style={{ ...styles.content, ...style }}>{children}</View>;
}

export default CardContent;

CardContent.defaultProps = {
  children: null,
  style: {},
};
CardContent.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};
