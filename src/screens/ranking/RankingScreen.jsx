import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import Images from '../../../assets/Images';
import CustomizedSearchBarOverlay from '../../components/searchBar';
import RankingView from '../../components/ranking/RankingView';
import SafeArea from '../../styles/SafeArea';

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
    <SafeArea>
      <MainHeader navigation={navigation} />
      <CustomizedSearchBarOverlay />

      <ImageBackground
        source={Images.backgrounds.ranking}
        style={styles.background}
      >
        <RankingView />
      </ImageBackground>
    </SafeArea>
  );
}

export default RankingScreen;

RankingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
