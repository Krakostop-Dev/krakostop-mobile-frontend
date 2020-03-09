import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../styles/basic/ksBasic';
import AttractionHeaderView from './AttractionHeaderView';
import AttractionContentView from './AttractionContentView';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 10,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 3,
  },
});

function AttractionView({ attraction }) {
  return (
    <View style={styles.container}>
      <AttractionHeaderView name={attraction.name} time={attraction.time} />
      <AttractionContentView
        fullDescription={attraction.fullDescription}
        shortDescription={attraction.shortDescription}
        place={attraction.place}
      />
    </View>
  );
}

export default AttractionView;

AttractionView.propTypes = {
  attraction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};
