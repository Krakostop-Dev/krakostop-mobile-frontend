import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import DayOverlay from './DayOverlay';

function DayCardView({ day }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View>
        <Text>{day.name}</Text>
      </View>

      <DayOverlay day={day} isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
}

export default DayCardView;

DayCardView.propTypes = {
  day: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attractions: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
