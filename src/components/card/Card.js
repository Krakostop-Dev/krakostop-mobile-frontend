import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  card: {
    flex: 0.9,
    width: '90%',
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

function Card({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>{children}</View>
    </View>
  );
}
export default Card;

Card.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children(props, propName, componentName) {
    const { [propName]: prop } = props;

    const cardHeader = 'CardHeader';
    const cardContent = 'CardContent';

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
};
