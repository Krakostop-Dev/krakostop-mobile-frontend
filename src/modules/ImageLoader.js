import * as ImagePicker from 'expo-image-picker';
import config from '../../config/config';

export async function loadImage() {
  const {
    granted,
    canAskAgain,
  } = await ImagePicker.getCameraRollPermissionsAsync();
  if (!granted && !canAskAgain) {
    // TODO: Add error-msg/instruction what to do
    // alert(
    //   'No permissions to access camera-roll, change settings and try again'
    // );
    return null;
  }
  if (!granted && canAskAgain) {
    await ImagePicker.requestCameraRollPermissionsAsync();
  }
  const avatar = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
  });

  return avatar.cancelled ? null : avatar;
}

export function convertRelativePathToAbsoluteUri(avatarPath) {
  return {
    uri: config.baseUrl + avatarPath,
  };
}
