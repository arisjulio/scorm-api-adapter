import $ from 'jquery';
import { Base64 } from 'js-base64';
import Storage from './storage';
import errorDefinition from './errors';

export default class SCORMAdapter {
  set uri(uri) {
    this.apiURL = uri;
  }

  get uri() {
    return this.apiURL;
  }

  LMSInitialize() {
    Storage.setItem('Initialized', true);
    return true;
  }

  LMSFinish() {
    if (!this._isInitialized()) {
      this._setError(301);
      return false;
    }
    let _return = this.LMSCommit();
    Storage.setItem('Initialized', false);
    Storage.clearAll();
    return _return;
  }

  LMSGetValue(element) {
    if (!this._isInitialized()) {
      this._setError(301);
      return false;
    }
    let value = Storage.getItem(element);
    if (!value) {
      this._setError(201);
      return "";
    }
    return value;
  }

  LMSSetValue(element, value) {
    if (!this._isInitialized()) {
      this._setError(301);
      return false;
    }
    Storage.setItem(element, value);
    return Storage.getItem(element);
  }

  LMSCommit() {
    let data = Storage.getAll();
    delete data['errors'];
    delete data['Initialized'];
    data = JSON.stringify(data);
    data = Base64.encode(data);
    let response;
    let _return = true;
    $.post({
      url: this.apiURL,
      async: false,
      data: { data },
      success: res => {
        response = res;
      },
      error: () => {
        this._setError(101);
        _return = false;
      }
    });
    if (!response.success) {
      this._setError(101);
      return false;
    }
    return _return;
  }

  LMSGetLastError() {
    let errors = Storage.getItem('errors');
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
    let initialized = Storage.getItem('Initialized');
    return initialized;
  }

  _setError(errorCode) {
    errorCode = errorCode.toString();
    let errors = Storage.getItem('errors');
    if (!errors) errors = '[]';
    errors = JSON.parse(errors);
    errors.push(errorCode);
    errors = JSON.stringify(errors);
    Storage.setItem('errors', errors);
  }
}