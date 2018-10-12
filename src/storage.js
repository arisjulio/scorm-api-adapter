export default class Storage {
  static setItem(element, value) {
    let item = window.localStorage.getItem('scormData');
    if (!item) {
      window.localStorage.setItem('scormData', '{}');
    }
    item = window.localStorage.getItem('scormData');
    item = JSON.parse(item);
    item[element] = value;
    window.localStorage.setItem('scormData', JSON.stringify(item));
  }

  static getItem(element) {
    let item = window.localStorage.getItem('scormData');
    if (!item) {
      return null;
    }
    item = JSON.parse(item);
    let _return = item[element] || null;
    return _return;
  }

  static getAll() {
    let item = window.localStorage.getItem('scormData');
    if (!item) {
      return "";
    }
    item = JSON.parse(item);
    return item || "";
  }

  static clearAll() {
    window.localStorage.removeItem('scormData');
  }
}