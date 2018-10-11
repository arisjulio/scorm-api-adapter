import axios from 'axios';
import { Base64 } from 'js-base64';
import errorDefinition from './errors';

export default class SCORMAdapter {
  constructor(uri = 'http://localhost') {
    this.uri = uri;
  }

  LMSInitialize() {
    window.localStorage.setItem('Initialized', true);
    return true;
  }

  LMSFinish() {
    if (!this._isInitialized()) {
      this._setError(301);
      return false;
    }
    window.localStorage.setItem('Initialized', false);
    return true;
  }

  LMSGetValue(element) {
    let value = window.localStorage.getItem(element);
    if (!value) {
      this._setError(201);
      return "";
    }
    return value;
  }

  LMSSetValue(element, value) {
    window.localStorage.setItem(element, value);
    return window.localStorage.getItem(element);
  }

  async LMSCommit() {
    let data = window.localStorage;
    data = JSON.stringify(data);
    data = Base64.encode(data);
    let response = await axios.post(this.uri, {
      data,
      transformResponse: [res => {
        return JSON.parse(res);
      }]
    });
    if (!response.success) {
      this._setError(10);
      return false;
    }
    return true;
  }

  LMSGetLastError() {
    let errors = window.localStorage.getItem('errors');
    errors = JSON.parse(errors);
    if (errors && errors.length > 0) {
      return errors.pop();
    }
    return "";
  }

  LMSGetErrorString(errorCode) {
    errorCode = errorCode.toString();
    let error = errorDefinition[errorCode];
    if (!error) return "";
    return error["errorString"];
  }

  LMSGetDiagnostic(errorCode) {
    errorCode = errorCode.toString();
    let error = errorDefinition[errorCode];
    if (!error) return "";
    return error["diagnostic"];
  }

  _isInitialized() {
    let initialized = window.localStorage.getItem('Initialized');
    return initialized === 'true';
  }

  _setError(errorCode) {
    errorCode = errorCode.toString();
    let errors = window.localStorage.getItem('errors');
    if (!errors) errors = '[]';
    errors = JSON.parse(errors);
    errors.push(errorCode);
    errors = JSON.stringify(errors);
    window.localStorage.setItem('errors', errors);
  }
}