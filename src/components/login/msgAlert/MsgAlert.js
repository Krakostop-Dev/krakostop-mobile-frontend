import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ksStyle } from '../../../styles/basic/ksBasic';
import InfoText from '../InfoText';
import BackButton from './BackButton';
import ResignInput from './ResignInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
const INFO_TEXT =
  'Nie łącząc konta z Messengerem nie będziesz mógł/a korzystać z czatu.\nJeśli jesteś pewny/a swojej decyzji wpisz poniżej “rezygnuje”.';
function MsgAlert() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <InfoText infoText={INFO_TEXT} warning />
        <ResignInput />
        <BackButton />
      </View>
    </View>
  );
}

export default MsgAlert;
