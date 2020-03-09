import React from 'react';
import PropTypes from 'prop-types';
import KSOverlay from '../../ksOverlay/KSOverlay';
import KSOverlayHeader from '../../ksOverlay/KSOverlayHeader';
import DayDetailsContentView from './DayDetailsContentView';

function DayDetailsOverlay({ day, isVisible, setIsVisible }) {
  return (
    <KSOverlay setIsVisible={setIsVisible} isVisible={isVisible}>
      <>
        <KSOverlayHeader
          subtitles={[day.date]}
          title={day.name}
          setIsVisible={setIsVisible}
        />
        <DayDetailsContentView day={day} />
      </>
    </KSOverlay>
  );
}

export default DayDetailsOverlay;

DayDetailsOverlay.propTypes = {
  day: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attractions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
