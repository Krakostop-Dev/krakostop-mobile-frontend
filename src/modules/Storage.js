import * as SecureStore from 'expo-secure-store';

export const saveDataInStorage = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getDataFromStorage = async key => {
  return SecureStore.getItemAsync(key);
};

export const removeDataFromStorage = async key => {
  await SecureStore.deleteItemAsync(key);
};
