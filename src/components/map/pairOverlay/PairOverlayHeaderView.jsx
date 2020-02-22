import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ksStyle.colors.primaryColorMedium,
    paddingRight: 5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  titleView: { flex: 1 },
  titleText: {
    flexWrap: 'wrap',
    fontSize: 23,
    fontFamily: 'sans-serif',
    color: 'white',
  },
  subtitleView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingRight: 7,
    paddingLeft: 5,
  },
  subtitleText: {
    flexWrap: 'wrap',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: 'white',
    textAlign: 'right',
  },
});

function PairOverlayHeaderView({ participant, index, setIsVisible }) {
  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => setIsVisible(false)}
          icon={<MaterialIcons name="arrow-back" size={30} color="white" />}
          type="clear"
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText} numberOfLines={2}>
          Para #{participant.pair.pair_nr}
        </Text>
      </View>
      <View style={styles.subtitleView}>
        <Text style={styles.subtitleText} numberOfLines={2}>
          miejsce {index + 1}
        </Text>
        <Text style={styles.subtitleText} numberOfLines={2}>
          1090km do mety
        </Text>
      </View>
    </View>
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
