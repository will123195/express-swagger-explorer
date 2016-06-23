# express-swagger-explorer

## Install

```
npm i --save express-swagger-explorer
```

## Usage

```js
const app = request('express')();
const swaggerUI = require('express-swagger-explorer')();
app.use('/documentation', swaggerUI);
```