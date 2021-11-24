# load-mongoose

The established connection will use the default options (for mongoose 5.9), these can be overridden with mongoOpts:
```
useCreateIndex: true,
useFindAndModify: false,
useNewUrlParser: true,
useUnifiedTopology: true
```

Loading with independent params:
```js
import loadMongoose from 'load-mongoose';

mongoLoader({
  mongoAdditionalParams: 'authSource=admin',
  mongoDatabase: 'myapp',
  mongoHost: 'localhost',
  mongoOpts: {
    useCreateIndex: false
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
import loadMongoose from 'load-mongoose';

loadMongoose({
  mongoOpts: {
    useCreateIndex: false
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

See the [index.d.ts](https://github.com/j-d-carmichael/load-mongoose/blob/master/lib/index.d.ts) file for type definition mongoLoader 1st argument.
