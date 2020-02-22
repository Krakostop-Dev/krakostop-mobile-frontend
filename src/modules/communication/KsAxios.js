import axios from 'axios';
import config from '../../../config/config';
import { getDataFromStorage } from '../Storage';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const KsAxios = axios.create();

KsAxios.interceptors.request.use(async requestConfig => {
  const token = await getDataFromStorage('TOKEN');
  const resultConfig = requestConfig;
  resultConfig.headers.Authorization = `Bearer ${token}`;
  if (!isAbsoluteURLRegex.test(resultConfig.url)) {
    resultConfig.url = [config.baseUrl, requestConfig.url].join('');
  }
  return resultConfig;
});

export default KsAxios;
