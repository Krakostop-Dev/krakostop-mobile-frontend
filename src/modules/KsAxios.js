import React from 'react';
import axios from 'axios';
import config from '../../config/config';
import { getDataFromStorage } from './Storage';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const KsAxios = axios.create();
const token = getDataFromStorage('TOKEN');

KsAxios.interceptors.request.use(requestConfig => {
  requestConfig.headers.Authorization = `Bearer ${token}`;
  if (!isAbsoluteURLRegex.test(requestConfig.url)) {
    requestConfig.url = [config.baseUrl, requestConfig.url].join('');
  }
  return requestConfig;
});

export default KsAxios;
