import React, { useContext, useState } from 'react';
import Card from '../../../card/Card';
import CardHeader from '../../../card/CardHeader';
import CardContent from '../../../card/CardContent';
import InfoText from '../../InfoText';
import { LoginContext } from '../../../../modules/context/LoginContext';
import ChangeAvatarView from './ChangeAvatarView';
import SmallInfoText from '../../../SmallInfoText';
import EditAvatarNavFooter from './EditAvatarNavFooter';

const HEADER_TITLE = 'Konfiguracja Profilu 1/3';

function EditAvatar() {
  const { user } = useContext(LoginContext);

  const HELLO_TEXT = `Cześć ${user.first_name}!\nW celu dokończenia konfiguracji Twojego profilu prosimy Cię o wgranie avatara.`;

  const [avatar, setAvatar] = useState('');
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={HELLO_TEXT} />
        <ChangeAvatarView setError={setError} setAvatar={setAvatar} />
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
        <EditAvatarNavFooter setError={setError} avatar={avatar} />
      </CardContent>
    </Card>
  );
}

export default EditAvatar;
