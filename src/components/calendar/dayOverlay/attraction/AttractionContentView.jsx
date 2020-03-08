import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  description: { padding: 5 },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  touchable: {
    backgroundColor: ksStyle.colors.primaryColorDark,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 3,
  },
  white: { color: 'white' },
  bold: { fontWeight: 'bold' },
});

function AttractionContentView({ fullDescription, shortDescription, place }) {
  const [fullDescriptionMode, setFullDescriptionMode] = useState(false);

  return (
    <>
      <View style={styles.description}>
        <Text>{fullDescriptionMode ? fullDescription : shortDescription}</Text>
      </View>
      <View style={styles.panel}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() =>
            fullDescriptionMode
              ? setFullDescriptionMode(false)
              : setFullDescriptionMode(true)
          }
        >
          <Text style={styles.white}>
            {fullDescriptionMode ? 'Zwiń' : 'Rozwiń'}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.bold}>{place}</Text>
        </View>
      </View>
    </>
  );
}

export default AttractionContentView;

AttractionContentView.propTypes = {
  fullDescription: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};
