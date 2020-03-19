import React from 'react';
import { StyleSheet, View } from 'react-native';
import RankingTop3View from './RankingTop3View';
import HeaderView from './HeaderView';
import RankingContentView from './RankingContentView';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function RankingView() {
  return (
    <View style={styles.container}>
      <RankingTop3View />
      <HeaderView />
      <RankingContentView />
    </View>
  );
}

export default RankingView;
