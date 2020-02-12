import { StyleSheet, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

function CardContent({ children, style }) {
  return <View style={{ ...styles.content, ...style }}>{children}</View>;
}

export default CardContent;

const styles = StyleSheet.create({
  content: {
    flex: 10,
  },
});

CardContent.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};
