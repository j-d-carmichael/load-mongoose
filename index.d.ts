export default function (config: {
  mongoAdditionalParams?: string;
  mongoDatabase: string;
  mongoHost: string;
  mongoPassword: string;
  mongoPort: number;
  mongoOpts?: object;
  mongoUser: string;
} & {
  mongoOpts?: object;
  mongoUri: string;
}): void;
