# express-swagger-explorer

## Install

```
npm i --save express-swagger-explorer
```

## Usage

```js
const app = request('express')();
const swaggerUI = require('express-swagger-explorer')();
app.use('/api-documentation', swaggerUI);
app.listen(8080)
```

Now you have a nice Swagger UI API explorer:

[http://localhost:8080/api-documentation](http://localhost:8080/api-documentation)

Note: Swagger UI expects a Swagger 2.0 `swagger.json` file to exist relative to the Swagger UI folder. 
