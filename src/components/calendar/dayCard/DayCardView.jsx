import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DayDetailsOverlay from '../dayOverlay/DayDetailsOverlay';
import { ksStyle } from '../../../styles/basic/ksBasic';
import DayCardHeaderView from './DayCardHeaderView';
import DayCardContentView from './DayCardContentView';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
  },
  touchable: { width: '100%' },
  card: {
    width: '100%',
    borderRadius: 3,
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
});

function DayCardView({ day }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.touchable}
        >
          <View style={styles.card}>
            <DayCardHeaderView name={day.name} />
            <DayCardContentView date={day.date} />
          </View>
        </TouchableOpacity>
      </View>

      <DayDetailsOverlay
        day={day}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        key={day.id}
      />
    </>
  );
}

export default DayCardView;

DayCardView.propTypes = {
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
};
