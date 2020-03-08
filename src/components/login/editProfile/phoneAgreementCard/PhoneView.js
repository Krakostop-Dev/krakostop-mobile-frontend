import React, { useContext } from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { LoginContext } from '../../../../modules/context/LoginContext';
import { ksStyle } from '../../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    ...ksStyle.input,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  text: {
    flex: 0.8,
    fontSize: ksStyle.input.fontSize,
  },
});

function PhoneView({ style }) {
  const { user } = useContext(LoginContext);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>{user.phone}</Text>
    </View>
  );
}

export default PhoneView;

PhoneView.defaultProps = {
  style: {},
};

PhoneView.propTypes = {
  style: ViewPropTypes.style,
};
