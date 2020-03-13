import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../../../../styles/basic/ksBasic';
import InfoText from '../../../InfoText';
import BackButton from './BackButton';
import ResignationInput from './ResignationInput';
import SmallInfoText from '../../../../SmallInfoText';

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
  'Format Twojego linku jest niezgodny. W takiej sytuacji nie będziesz mógł/a korzystać z czatu. \nJeśli jesteś pewny/a swojej decyzji wpisz poniżej “rezygnuje”.';
function ResignationAlert({ setDisplayMsgAlert }) {
  const navigation = useContext(NavigationContext);
  const avatar = navigation.getParam('avatar');

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  const [hasResigned, setResigned] = useState(false);

  return (
    <View style={styles.container}>
      {hasResigned ? (
        <Spinner color="red" />
      ) : (
        <View style={styles.card}>
          <InfoText infoText={INFO_TEXT} warning />
          <ResignationInput
            avatar={avatar}
            setError={setError}
            setResigned={setResigned}
            setDisplayMsgAlert={setDisplayMsgAlert}
          />
          {hasErrorOccurred.isError ? (
            <SmallInfoText text={hasErrorOccurred.message} color="red" />
          ) : null}
          <BackButton setDisplayMsgAlert={setDisplayMsgAlert} />
        </View>
      )}
    </View>
  );
}

export default ResignationAlert;

ResignationAlert.propTypes = {
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
