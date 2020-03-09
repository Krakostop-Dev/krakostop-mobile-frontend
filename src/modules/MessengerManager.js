import { Linking } from 'expo';

export function checkFbProfileFormatValidity(fbProfileLink) {
  const regexFb = new RegExp('.*facebook.com/.*/?');
  return regexFb.test(fbProfileLink);
}

export function getProfileNameFromFbProfileLink(fbProfileLink) {
  if (checkFbProfileFormatValidity(fbProfileLink)) {
    const regexFb = new RegExp('.*facebook.com/');
    const regexRest = new RegExp('/.*');
    const linkWithoutFb = fbProfileLink.replace(regexFb, '');
    return linkWithoutFb.replace(regexRest, '');
  }
  return null;
}

export function createMsgLinkFromFbProfileLink(fbProfileLink) {
  const profileName = getProfileNameFromFbProfileLink(fbProfileLink);
  return `https://m.me/${profileName}`;
}

export async function redirectToMessenger(msgLink) {
  if (msgLink) {
    await Linking.openURL(msgLink);
  } else {
    // TODO: Diplay error in proper way
    // eslint-disable-next-line no-undef
    alert('Użytkownik nie korzysta z chatu');
  }
}
