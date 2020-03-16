import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import RankingTopPlaceView from './rankingTopPlace/RankingTopPlaceView';
import { MapContext } from '../../modules/context/MapContext';

const FIRST_PLACE = require('../../../assets/1st-place.png');
const SECOND_PLACE = require('../../../assets/2nd-place.png');
const THIRD_PLACE = require('../../../assets/3th-place.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 275,
    paddingTop: 8,
    justifyContent: 'space-between',
  },
});

function RankingTop3View() {
  const mapContext = useContext(MapContext);
  const { participants } = mapContext;
  const top3 = participants.slice(0, 3);

  return (
    <View style={styles.container}>
      {top3[1] && (
        <RankingTopPlaceView
          alignSelf="center"
          participant={top3[1]}
          placeImage={SECOND_PLACE}
        />
      )}
      {top3[0] && (
        <RankingTopPlaceView
          alignSelf="flex-start"
          participant={top3[0]}
          placeImage={FIRST_PLACE}
        />
      )}
      {top3[2] && (
        <RankingTopPlaceView
          alignSelf="flex-end"
          participant={top3[2]}
          placeImage={THIRD_PLACE}
        />
      )}
    </View>
  );
}

export default RankingTop3View;
