# openapi-nodegen-mongoose-loader

Mongoose abstraction loading:

```js
import mongoLoader from 'openapi-nodegen-mongoose-loader';

mongoLoader({
  mongoAdditionalParams: 'authSource=admin',
  mongoDatabase: 'myapp',
  mongoHost: 'localhost',
  mongoPassword: 'password',
  mongoPort: 27017,
  mongoUser: 'username',
});
```
