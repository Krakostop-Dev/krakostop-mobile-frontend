import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

function LoginCard({ children, style }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, ...style }}>{children}</View>
    </View>
  );
}
export default LoginCard;

LoginCard.defaultProps = {
  style: {},
};

LoginCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children(props, propName, componentName) {
    const { [propName]: prop } = props;

    const cardHeader = 'LoginCardHeader';
    const cardContent = 'LoginCardContent';

    const count = React.Children.count(prop);
    if (count !== 2) {
      return new Error(
        `${componentName} have ${count} children instead of 2 (CardHeader and CardContent)`
      );
    }
    const children = React.Children.toArray(prop);
    const firstChildName = children[0].type.name;
    if (firstChildName !== cardHeader) {
      return new Error(
        `First child component should be ${cardHeader} instead of ${firstChildName}`
      );
    }
    const secondChildName = children[1].type.name;
    if (secondChildName !== cardContent) {
      return new Error(
        `Second child component should be ${cardContent} instead of ${secondChildName}`
      );
    }
    return null;
  },
  style: ViewPropTypes.style,
};
