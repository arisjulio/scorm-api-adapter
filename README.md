# SCORM API Adapter

## Installation

Install with npm executing:

```bash
npm i arisjulio/scorm-api-adapter
```

Import, create an instance and set the API REST URI:

```javascript
import SCORMAdapter from 'scorm-api-adapter';

window.API = new SCORMAdapter();
window.API.uri = 'https://your-api-to-commit.org/great-endpoit';
```

## Download

You can download the minified file from [here.](https://github.com/arisjulio/scorm-api-adapter/releases/latest)

If you download or clone the repository, you must execute `npm run compile` and the minified file will be generated in the `dist` folder.

The minified file must be included in your website:

```html
<script src="scorm-api-adapter.js"></script>
```

After, in your JS code, You can access to the `window.API` element and must set your API REST URI:

For example:

```javascript
window.API.uri = 'https://your-api-to-commit.org/great-endpoit';
```

Now you can load an SCORM Object in a frame or new window and it will work.

> **IMPORTANT:** You must return an `success` field in your API REST response to know if the commit attempt was successfully executed.
