import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  innerText: { fontSize: 14 },
});

function RankingTopPlaceKmLeftView() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        1090km{'\n'}
        <Text style={styles.innerText}>do mety</Text>
      </Text>
    </View>
  );
}

export default RankingTopPlaceKmLeftView;
