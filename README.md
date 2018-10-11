#SCORM Adapter

## Installation

```bash
npm i arisjulio/scorm-api-adapter
```

## Usage

```javascript
import SCORMAdapter from 'scorm-api-adapter';

window.API = new SCORMAdapter('http://your-api-to-comit.org');
```

> You must return an `success` in your API for know if the commit attempt was successfully executed.