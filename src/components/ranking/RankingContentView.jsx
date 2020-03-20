import React, { createRef, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import RankingItemView from './RankingItemView';
import { MapContext } from '../../modules/context/MapContext';
import { LoginContext } from '../../modules/context/LoginContext';
import { SearchContext } from '../../modules/context/SearchContext';

const ITEM_HEIGHT = 80;
const ITEM_SPACE = 5;

const styles = StyleSheet.create({
  // TODO: CREATE BETTER STYLING
  container: { width: '90%', height: '50%', paddingBottom: 30 },
});

function RankingContentView() {
  const mapContext = useContext(MapContext);
  const { user } = useContext(LoginContext);
  const { setRankingListRef } = useContext(SearchContext);
  const { participants } = mapContext;
  const lastParticipants = participants.slice(3);

  let listRef = createRef();

  useEffect(() => {
    setRankingListRef(listRef);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref => {
          listRef = ref;
        }}
        data={lastParticipants}
        renderItem={({ item: participant, index }) => {
          return (
            <RankingItemView
              participant={participant}
              index={index + 3}
              key={participant.id}
              height={ITEM_HEIGHT}
              itemSpace={ITEM_SPACE}
            />
          );
        }}
        initialScrollIndex={user.ranking > 3 ? user.ranking - 5 : 0}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT + ITEM_SPACE,
          offset: (ITEM_HEIGHT + ITEM_SPACE) * index,
          index,
        })}
      />
    </View>
  );
}

export default RankingContentView;
