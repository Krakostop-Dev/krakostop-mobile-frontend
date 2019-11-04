import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ParticipantMarker = ({participant}) => {
  const appContext = useContext(AppContext);
  const { user } = appContext;
  const isParticipantAUser = participant.id === user.id;
  const result = !isParticipantAUser ? (
    <Marker
      coordinate={{
        latitude: participant.location.coords.latitude,
        longitude: participant.location.coords.longitude
      }}
      onPress={console.log('Participant marker works')}
    >
      <Avatar
        size="medium"
        rounded
        source={participant.avatar}
        activeOpacity={0.7}
      />
    </Marker>
  ) : null;

  return result;
};

export default ParticipantMarker;
