import * as ImagePicker from 'expo-image-picker';

async function loadImage() {
  const avatar = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
  });
  return avatar.cancelled ? null : avatar;
}

export default loadImage;
