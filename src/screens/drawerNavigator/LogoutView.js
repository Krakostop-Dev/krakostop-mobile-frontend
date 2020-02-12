import React from 'react';
import Card from '../../components/card/Card';
import CardHeader from '../../components/card/CardHeader';
import { Text } from 'react-native';
import CardContent from '../../components/card/CardContent';

export default ({ navigation }) => {
  return (
    <Card navigation={navigation}>
      <CardHeader navigation={navigation} title={'Profil'} />
      <CardContent>
        <Text>aaaaaaaaaaaaaaa</Text>
      </CardContent>
    </Card>
  );
};
