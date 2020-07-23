import {create} from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from '../config/URL';
import * as API from '../config/api';

const api = create({baseURL: API_URL});

export const createTransport = body => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    api
      .post(API.CREATE_TRANSPORT, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getTransports = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_TRANSPORTS)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getTransport = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_TRANSPORT.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createOther = body => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    api
      .post(API.CREATE_OTHER, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOthers = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_OTHERS)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOther = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_OTHER.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};