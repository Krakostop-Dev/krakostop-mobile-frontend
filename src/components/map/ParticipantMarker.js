import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PairOverlay from './pairOverlay';

import { convertRelativePathToAbsoluteUri } from '../../modules/ImageLoader';

const PARTICIPANT_AVATAR = require('../../../assets/hand.png');

function ParticipantMarker({ participant, index }) {
  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);
  const [avatar, setAvatar] = useState(PARTICIPANT_AVATAR);

  useEffect(() => {
    // TODO: CHECK WHICH USER SEND LATEST LOCATION
    // TODO: CHECKS IF AVATAR != DEFAULT AVATAR
    const { avatar: avatarPath } = participant.pair.users[0];
    setAvatar(convertRelativePathToAbsoluteUri(avatarPath));
  }, []);

  return (
    <Marker
      coordinate={{
        latitude: Number(participant.lat),
        longitude: Number(participant.lng),
      }}
      onPress={() => setIsPairOverlayVisible(true)}
    >
      <Avatar size="medium" rounded source={avatar} activeOpacity={0.7} />
      <PairOverlay
        isVisible={isPairOverlayVisible}
        setIsVisible={setIsPairOverlayVisible}
        participant={participant}
        index={index}
      />
    </Marker>
  );
}

export default ParticipantMarker;

ParticipantMarker.propTypes = {
  participant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
