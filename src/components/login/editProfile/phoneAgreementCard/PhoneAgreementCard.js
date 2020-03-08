import React from 'react';
import Card from '../../../card/Card';
import CardHeader from '../../../card/CardHeader';
import CardContent from '../../../card/CardContent';
import InfoText from '../../InfoText';
import PhoneAgreementView from '../PhoneAgreementView';
import PhoneView from './PhoneView';
import PhoneAgreementNavFooter from './PhoneAgreemNavFooter';

const HEADER_TITLE = 'Konfiguracja Profilu 3/3';
const PHONE_INFO_TEXT =
  'Poniżej znajduje się twój numer telefonu. Będzie on widoczny dla innych uczestników wyścigu.';
const AGREEMENT_TEXT =
  'Jeżeli nie chcesz, żeby twój numer był widoczny naciśnij przycisk obok.';

function PhoneAgreementCard() {
  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={PHONE_INFO_TEXT} />
        <PhoneView />
        <PhoneAgreementView label={AGREEMENT_TEXT} />
        <PhoneAgreementNavFooter />
      </CardContent>
    </Card>
  );
}

export default PhoneAgreementCard;
