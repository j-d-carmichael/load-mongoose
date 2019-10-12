# openapi-nodegen-mongoose-loader

Loading with independent params:
```js
import mongoLoader from 'openapi-nodegen-mongoose-loader';

mongoLoader({
  mongoAdditionalParams: 'authSource=admin',
  mongoDatabase: 'myapp',
  mongoHost: 'localhost',
  mongoOpts: {
    useCreateIndex: true
  },
  mongoPassword: 'password',
  mongoPort: 27017,
  mongoUser: 'username',
});
```

Loading with full connection uri:
```js
import mongoLoader from 'openapi-nodegen-mongoose-loader';

mongoLoader({
  mongoOpts: {
    useCreateIndex: true
  },
  mongoUri: 'someurlstring',
});
```

See the [index.d.ts](https://github.com/johndcarmichael/openapi-nodegen-mongoose-loader/blob/master/index.d.ts) file for type definition mongoLoader 1st argument.
