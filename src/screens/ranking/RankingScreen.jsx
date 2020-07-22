import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Images from '../../../assets/Images';
import RankingView from '../../components/ranking/RankingView';
import ScreenWithSearchBar from '../common/ScreenWithSearchBar';

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%', zIndex: 0 },
});

function RankingScreen() {
  return (
    <ScreenWithSearchBar>
      <ImageBackground
        source={Images.backgrounds.ranking}
        style={styles.background}
      >
        <RankingView />
      </ImageBackground>
    </ScreenWithSearchBar>
  );
}

export default RankingScreen;
