## 2.0.0 (2021-11-24)

### Breaking change
* Potentially a breaking change, when the port number is falsey, the port string is no longer added to the connection url resulting in `....mongodb.net/database-name...`. Note the missing port string.
* Potentially a breaking change, the connection protocol is now mongodb+srv unless the mongoProtocol is controlled by the config injected

## 1.3.2 (2021-11-24)

### Fixes
* **dependencies:** fix mongoose peer-dependency requirement for 5 or 6 with different default connection objects. Note that for typegoose mongoose v5 is required for below v9.
