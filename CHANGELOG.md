## 3.2.0 (2023-09-12)

### Feature
* Now supports mongoose 7 and 8


## 3.1.0 (2023-09-12)

### Feature
* Now returns the mongoose connection object, see the readme examples of the promise resolve.


## 3.0.0 (2023-09-12)

### Breaking change
* Now requires mongoose version ^7.*


## 2.1.0 (2021-03-08)

### Feature
* extract the connection uri function, see the readme

## 2.0.0 (2021-11-24)

### Breaking change
* Potentially a breaking change, when the port number is falsey, the port string is no longer added to the connection url resulting in `....mongodb.net/database-name...`. Note the missing port string.
* Potentially a breaking change, the connection protocol is now mongodb+srv unless the mongoProtocol is controlled by the config injected

## 1.3.2 (2021-11-24)

### Fixes
* **dependencies:** fix mongoose peer-dependency requirement for 5 or 6 with different default connection objects. Note that for typegoose mongoose v5 is required for below v9.
