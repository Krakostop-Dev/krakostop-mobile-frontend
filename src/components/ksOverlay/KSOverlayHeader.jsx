import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

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
    fontFamily: ksStyle.font.base,
    color: 'white',
  },
  subtitleView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingRight: 7,
    paddingLeft: 5,
  },
  subtitleLargeSize: {
    fontSize: 23,
  },
  subtitleSmallSize: {
    fontSize: 16,
  },
  subtitleText: {
    flexWrap: 'wrap',
    fontFamily: ksStyle.font.base,
    color: 'white',
    textAlign: 'right',
  },
});

function KSOverlayHeader({ title, subtitles, setIsVisible }) {
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
          {title}
        </Text>
      </View>
      <View style={styles.subtitleView}>
        {subtitles.map(subtitle => (
          <Text
            style={[
              styles.subtitleText,
              subtitles.length > 1
                ? styles.subtitleSmallSize
                : styles.subtitleLargeSize,
            ]}
            numberOfLines={2}
            key={subtitle}
          >
            {subtitle}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default KSOverlayHeader;

KSOverlayHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
