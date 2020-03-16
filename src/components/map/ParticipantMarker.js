import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapPairOverlay from '../pairOverlay/MapPairOverlay';

import { convertRelativePathToAbsoluteUri } from '../../modules/ImageLoader';

const PARTICIPANT_AVATAR = require('../../../assets/hand.png');

function ParticipantMarker({ participant, index, coordinate }) {
  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);
  const [avatar, setAvatar] = useState(PARTICIPANT_AVATAR);

  useEffect(() => {
    // TODO: CHECK WHICH USER SEND LATEST LOCATION
    // TODO: CHECKS IF AVATAR != DEFAULT AVATAR
    const { avatar: avatarPath } = participant.pair.users[0].avatar
      ? participant.pair.users[0]
      : participant.pair.users[1];
    setAvatar(convertRelativePathToAbsoluteUri(avatarPath));
  }, []);

  return (
    <Marker
      coordinate={coordinate}
      onPress={() => setIsPairOverlayVisible(true)}
    >
      <Avatar size="medium" rounded source={avatar} activeOpacity={0.7} />
      <MapPairOverlay
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
          avatar: PropTypes.string,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};
