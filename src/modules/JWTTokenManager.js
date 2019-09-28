import * as SecureStore from 'expo-secure-store';
const TOKEN = 'token';

export const saveToken = async (token) => {
    await SecureStore.setItemAsync(TOKEN, token)
};

export const getToken = async () => {
    return await SecureStore.getItemAsync(TOKEN)
};

export const removeToken = async () => {
    await SecureStore.deleteItemAsync(TOKEN)
};