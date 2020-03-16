import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ViewPropTypes } from 'react-native';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
});

function CustomSearchBar() {
  const [search, setSearch] = useState();

  return <TextInput style={styles.containerStyle} />;
}

export default CustomSearchBar;

CustomSearchBar.defaultProps = {
  style: {},
};

CustomSearchBar.propTypes = {
  style: ViewPropTypes.style,
};
