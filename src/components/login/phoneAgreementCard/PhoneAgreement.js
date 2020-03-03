import React from 'react';
import Card from '../../card/Card';
import CardHeader from '../../card/CardHeader';
import CardContent from '../../card/CardContent';
import InfoText from '../InfoText';

function PhoneAgreement() {
  return (
    <Card>
      <CardHeader title="Konfiguracja Profilu 3/3" />
      <CardContent>
        <InfoText infoText="info" />
      </CardContent>
    </Card>
  );
}

export default PhoneAgreement;
