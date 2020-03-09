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
