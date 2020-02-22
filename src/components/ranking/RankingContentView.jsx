import React, { useContext } from 'react';
import { View } from 'react-native';
import RankingItemView from './RankingItemView';
import { MapContext } from '../../modules/context/MapContext';

function RankingContentView() {
  const mapContext = useContext(MapContext);
  const { participants } = mapContext;

  return (
    <View>
      {participants.map((participant, index) => (
        <RankingItemView
          participant={participant}
          index={index}
          key={participant.id}
        />
      ))}
    </View>
  );
}

export default RankingContentView;
