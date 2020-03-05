import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapPairOverlay from '../pairOverlay/MapPairOverlay';

const PARTICIPANT_AVATAR = require('../../../assets/hand.png');

function ParticipantMarker({ participant, index }) {
  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);

  return (
    <Marker
      coordinate={{
        latitude: Number(participant.lat),
        longitude: Number(participant.lng),
      }}
      onPress={() => setIsPairOverlayVisible(true)}
    >
      <Avatar
        size="medium"
        rounded
        source={PARTICIPANT_AVATAR}
        activeOpacity={0.7}
      />
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
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
