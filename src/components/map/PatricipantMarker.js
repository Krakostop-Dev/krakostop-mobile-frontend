import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PARTICIPANT_AVATAR = require('../../../assets/hand.png');

const ParticipantMarker = ({ participant }) => {
  const appContext = useContext(AppContext);
  const { user } = appContext;
  const isParticipantAUser = participant.user.id === user.id;
  const result = !isParticipantAUser ? (
    <Marker
      coordinate={{
        latitude: Number(participant.lat),
        longitude: Number(participant.lng),
      }}
    >
      <Avatar
        size="medium"
        rounded
        source={PARTICIPANT_AVATAR}
        activeOpacity={0.7}
      />
    </Marker>
  ) : null;
  return result;
};

export default ParticipantMarker;
