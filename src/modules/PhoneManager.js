import { Linking, Platform, Alert } from 'react-native';

export async function redirectToPhoneApp(phone) {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  try {
    const supported = await Linking.canOpenURL(phoneNumber);

    if (!supported) {
      Alert.alert('Phone number is not available');
      return null;
    }
    return Linking.openURL(phoneNumber);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
}

export function formatPhoneNumber(phone) {
  return [phone.slice(0, 3), ' ', phone.slice(3, 6), ' ', phone.slice(6)].join(
    ''
  );
}
