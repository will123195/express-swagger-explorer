# express-swagger-explorer

## Install

```
npm i --save express-swagger-explorer
```

## Usage

```js
const app = request('express')()
const swaggerUI = require('express-swagger-explorer')({
  json: 'swagger.json', // relative or absolute url
  title: 'My Documentation'
})
app.use('/documentation', swaggerUI)
```