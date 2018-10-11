import Adapter from '../src';

const API = new Adapter('https://reqres.in/api/users');

let LMSInitialize = API.LMSInitialize();
console.log('LMSInitialize', LMSInitialize);

let LMSFinish = API.LMSFinish();
console.log('LMSFinish', LMSFinish);

let LMSGetValue = API.LMSGetValue('Initialized');
console.log('LMSGetValue', LMSGetValue);

let LMSSetValue = API.LMSSetValue('Holi', ':3');
console.log('LMSSetValue', LMSSetValue);

(async function() {
let LMSCommit = await API.LMSCommit();
console.log('LMSCommit', LMSCommit);
})();

API.LMSGetValue('_Initialized');
let LMSGetLastError = API.LMSGetLastError();
console.log('LMSGetLastError', LMSGetLastError);

let LMSGetErrorString = API.LMSGetErrorString(LMSGetLastError);
console.log('LMSGetErrorString', LMSGetErrorString);

let LMSGetDiagnostic = API.LMSGetDiagnostic(LMSGetLastError);
console.log('LMSGetDiagnostic', LMSGetDiagnostic);