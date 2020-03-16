import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import RankingTopPlaceAvatarView from './RankingTopPlaceAvatarView';
import RankingTopPlaceContentView from './RankingTopPlaceContentView';
import RankingPairOverlay from '../../pairOverlay/RankingPairOverlay';

const styles = StyleSheet.create({
  touchable: { width: '32%' },
  container: {
    width: '100%',
    alignItems: 'center',
  },
});

function RankingTopPlaceView({ participant, placeImage, alignSelf }) {
  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={[styles.touchable, { alignSelf }]}
        onPress={() => setIsPairOverlayVisible(true)}
      >
        <View style={styles.container}>
          <RankingTopPlaceAvatarView
            placeImage={placeImage}
            avatar={participant.pair.users[0].avatar}
          />
          <RankingTopPlaceContentView participant={participant} />
        </View>
      </TouchableOpacity>

      <RankingPairOverlay
        isVisible={isPairOverlayVisible}
        setIsVisible={setIsPairOverlayVisible}
        participant={participant}
        index={0}
      />
    </>
  );
}

export default RankingTopPlaceView;

RankingTopPlaceView.propTypes = {
  participant: PropTypes.shape({
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
          avatar: PropTypes.node.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  placeImage: PropTypes.node.isRequired,
  alignSelf: PropTypes.string,
};

RankingTopPlaceView.defaultProps = {
  alignSelf: 'flex-start',
};
