import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function DayOverlay({ day, isVisible, setIsVisible }) {
  return <View />;
}

export default DayOverlay;

DayOverlay.propTypes = {
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
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
