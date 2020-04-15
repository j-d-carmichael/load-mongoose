type Config = ({
      // https://mongoosejs.com/docs/connections.html#options
      mongoOpts?: object;
      mongoUri: string;
}) | ({
      // https://docs.mongodb.com/manual/reference/connection-string/#connections-connection-options
      mongoAdditionalParams?: string;
      mongoDatabase: string;
      mongoHost: string;
      mongoUser: string;
      mongoPassword: string;
      mongoPort: number;
      // https://mongoosejs.com/docs/connections.html#options
      mongoOpts?: object;
});

export default function (config: Config): Promise<void>;
