import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';

function ConversationAvatarView({ avatar }) {
  return (
    <View>
      <Avatar size={60} rounded source={avatar} activeOpacity={0.7} />
    </View>
  );
}

export default ConversationAvatarView;

ConversationAvatarView.propTypes = {
  avatar: PropTypes.node.isRequired,
};
