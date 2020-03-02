import * as ImagePicker from 'expo-image-picker';
import config from '../../config/config';

export async function loadImage() {
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
