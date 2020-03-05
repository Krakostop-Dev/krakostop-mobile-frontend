import React from 'react';
import PropTypes from 'prop-types';
import KSOverlayHeader from '../ksOverlay/KSOverlayHeader';

function PairOverlayHeaderView({ participant, index, setIsVisible }) {
  return (
    <KSOverlayHeader
      setIsVisible={setIsVisible}
      subtitles={[`miejsce ${index + 1}`, '1090km do mety']}
      title={`Para #${participant.pair.pair_nr}`}
    />
  );
}

export default PairOverlayHeaderView;

PairOverlayHeaderView.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  participant: PropTypes.shape({
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
