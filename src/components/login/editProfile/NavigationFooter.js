import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewPropTypes,
} from 'react-native';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import NextButton from '../../NextButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  back_button_container: {
    width: '20%',
    padding: 10,
  },
  back_button: {
    fontSize: 16,
  },
});

const BACK_LABEL = 'Wróć';

function NavigationFooter({ style, nextButtonOnPress, backButton }) {
  const navigation = useContext(NavigationContext);
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.content}>
        {backButton ? (
          <TouchableHighlight
            style={styles.back_button_container}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.back_button}>{BACK_LABEL}</Text>
          </TouchableHighlight>
        ) : (
          <View style={styles.back_button_container} />
        )}
        <NextButton onPress={nextButtonOnPress} />
      </View>
    </View>
  );
}

export default NavigationFooter;

NavigationFooter.defaultProps = {
  style: {},
  backButton: true,
};

NavigationFooter.propTypes = {
  style: ViewPropTypes.style,
  nextButtonOnPress: PropTypes.func.isRequired,
  backButton: PropTypes.bool,
};
