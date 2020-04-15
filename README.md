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
})
.then(() =>{
  // do something safe in the knowledge there is a connection to the db
})
.catch((e: any) => {
  // Do something with the error
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
})
.then(() =>{
  // do something safe in the knowledge there is a connection to the db
})
.catch((e: any) => {
  // Do something with the error
});
```

See the [index.d.ts](https://github.com/johndcarmichael/openapi-nodegen-mongoose-loader/blob/master/index.d.ts) file for type definition mongoLoader 1st argument.
