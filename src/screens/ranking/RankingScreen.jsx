import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import RankingView from '../../components/ranking/RankingView';

const BACKGROUND = require('../../../assets/ranking-background.png');

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%' },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function RankingScreen({ navigation }) {
  return (
    <View>
      <MainHeader navigation={navigation} />

      <ImageBackground source={BACKGROUND} style={styles.background}>
        <ScrollView>
          <RankingView />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default RankingScreen;

RankingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
