import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapContext } from '../../modules/context/MapContext';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    paddingLeft: 5,
    paddingTop: 8,
    alignItems: 'center',
  },
  place: { width: '16%' },
  people: { width: '42%', textAlign: 'center' },
  peopleText: { textAlign: 'center' },
  pairNo: { width: '16%' },
  kmLeft: { width: '26%' },
});

function HeaderView() {
  const mapContext = useContext(MapContext);
  const { participants } = mapContext;

  return participants.length > 3 ? (
    <View style={styles.container}>
      <View style={styles.place}>
        <Text>Miejsce</Text>
      </View>
      <View style={styles.people}>
        <Text style={styles.peopleText}>Osoby</Text>
      </View>
      <View style={styles.pairNo}>
        <Text>Nr pary</Text>
      </View>
      <View style={styles.kmLeft}>
        <Text>Km do mety</Text>
      </View>
    </View>
  ) : null;
}

export default HeaderView;
