import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import InfoText from '../InfoText';
import BackButton from './BackButton';
import ResignInput from './ResignInput';
import ErrorText from '../ErrorText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 10,
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
const INFO_TEXT =
  'Nie łącząc konta z Messengerem nie będziesz mógł/a korzystać z czatu.\nJeśli jesteś pewny/a swojej decyzji wpisz poniżej “rezygnuje”.';
function MsgAlert({ navigation }) {
  const avatar = navigation.getParam('avatar');

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <InfoText infoText={INFO_TEXT} warning />
        <ResignInput avatar={avatar} setError={setError} />
        {hasErrorOccurred.isError ? (
          <ErrorText errorText={hasErrorOccurred.message} />
        ) : null}
        <BackButton />
      </View>
    </View>
  );
}

export default MsgAlert;

MsgAlert.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
