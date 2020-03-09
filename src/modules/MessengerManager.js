import { Linking } from 'expo';

export function getProfileNameFromLink(msgLink) {
  const regexFb = new RegExp('.*facebook.com/');
  const regexRest = new RegExp('/.*');
  const linkWithoutFb = msgLink.replace(regexFb, '');
  return linkWithoutFb.replace(regexRest, '');
}

export function checkFormatValidity(msgLink) {
  const regexFb = new RegExp('.*facebook.com/.*/?');
  return regexFb.test(msgLink);
}

export async function checkProfileValidity(msgLink) {
  const profileName = getProfileNameFromLink(msgLink);
  const response = await Linking.openURL(`https://m.me/${profileName}`);
  console.log(JSON.stringify(response));
}
