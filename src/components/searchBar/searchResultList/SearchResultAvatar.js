import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

function SearchResultAvatar({ avatar }) {
  return (
    <View>
      <Avatar size={60} rounded source={avatar} activeOpacity={0.7} />
    </View>
  );
}

export default SearchResultAvatar;

SearchResultAvatar.propTypes = {
  avatar: PropTypes.number.isRequired,
};
