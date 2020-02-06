import { FlatList, Image, StyleSheet, Text } from 'react-native';
import { ListItem } from 'native-base';
import * as _ from 'lodash';
import React from 'react';

export default () => {
  return (
    <FlatList
      data={[
        {
          label: 'Co zabrać?',
          icon: require('../../../assets/icons/backpack.png'),
        },
        {
          label: 'Partnerzy',
          icon: require('../../../assets/icons/partners.png'),
        },
        {
          label: 'Pakiet startowy',
          icon: require('../../../assets/icons/bag.png'),
        },
        {
          label: 'Kontakt',
          icon: require('../../../assets/icons/contact.png'),
        },
        {
          label: 'O aplikacji',
          icon: require('../../../assets/icons/info.png'),
        },
        {
          label: 'Wyloguj',
          icon: require('../../../assets/icons/logout.png'),
          style: { color: 'rgba(253, 0, 0, 0.65)' },
        },
      ]}
      renderItem={({ item }) => (
        <ListItem id>
          <Image style={styles.icon} source={item.icon} />
          <Text style={_.assign({}, styles.item, item.style)}>
            {item.label}
          </Text>
        </ListItem>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
