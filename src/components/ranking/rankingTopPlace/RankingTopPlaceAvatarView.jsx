import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import { convertRelativePathToAbsoluteUri } from '../../../modules/ImageLoader';
import Images from '../../../../assets/Images';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    zIndex: 5,
    bottom: 0,
    width: 74.6,
    height: 31,
  },
});

function RankingTopPlaceAvatarView({ avatar, placeImage }) {
  const [loadedAvatar, setLoadedAvatar] = useState(Images.others.avatar_mock);

  useEffect(() => {
    if (avatar) {
      setLoadedAvatar(convertRelativePathToAbsoluteUri(avatar));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Avatar size={90} rounded source={loadedAvatar} activeOpacity={0.7} />
      <Image style={styles.image} source={placeImage} />
    </View>
  );
}

export default RankingTopPlaceAvatarView;

RankingTopPlaceAvatarView.propTypes = {
  avatar: PropTypes.string.isRequired,
  placeImage: PropTypes.node.isRequired,
};
