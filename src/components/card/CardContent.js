import { StyleSheet, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  content: {
    flex: 10,
  },
});

function CardContent({ children, style }) {
  return <View style={{ ...styles.content, ...style }}>{children}</View>;
}

export default CardContent;

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

CardContent.defaultProps = {
  style: {},
};
