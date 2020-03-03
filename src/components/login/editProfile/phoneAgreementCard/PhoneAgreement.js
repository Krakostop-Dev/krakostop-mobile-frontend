import React, { useState } from 'react';
import Card from '../../../card/Card';
import CardHeader from '../../../card/CardHeader';
import CardContent from '../../../card/CardContent';
import InfoText from '../../InfoText';
import DisagreementView from './DisagreementView';
import PhoneView from './PhoneView';
import PhoneAgreementNavFooter from './PhoneAgreemNavFooter';

const HEADER_TITLE = 'Konfiguracja Profilu 3/3';
const PHONE_INFO_TEXT =
  'Poniżej znajduje się twój numer telefonu. Będzie on widoczny dla innych uczestników wyścigu.';

function PhoneAgreement() {
  const [disagreement, setDisagreement] = useState(false);

  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={PHONE_INFO_TEXT} />
        <PhoneView />
        <DisagreementView
          setDisagreement={setDisagreement}
          disagreement={disagreement}
        />
        <PhoneAgreementNavFooter disagreement={disagreement} />
      </CardContent>
    </Card>
  );
}

export default PhoneAgreement;
