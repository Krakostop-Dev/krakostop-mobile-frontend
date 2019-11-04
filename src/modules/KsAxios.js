import React from 'react';
import axios from 'axios';
import config from '../../config/config';
import { getDataFromStorage } from './Storage';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const KsAxios = axios.create();

KsAxios.interceptors.request.use(async requestConfig => {
  const token = await getDataFromStorage('TOKEN');
  requestConfig.headers.Authorization = `Bearer ${token}`;
  if (!isAbsoluteURLRegex.test(requestConfig.url)) {
    requestConfig.url = [config.baseUrl, requestConfig.url].join('');
  }
  return requestConfig;
});

export default KsAxios;
