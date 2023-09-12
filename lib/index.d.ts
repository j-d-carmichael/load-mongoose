import { ConnectOptions } from 'mongoose';
export type Config = {
    mongoAdditionalParams?: string;
    mongoDatabase?: string;
    mongoHost?: string;
    mongoPassword?: string;
    mongoPort?: string;
    mongoProtocol?: string;
    mongoUri?: string;
    mongoUser?: string;
    mongoOpts?: ConnectOptions;
};
export declare const calculateConnectionUri: (config: Config) => string;
declare const mongooseLoader: (config: Config) => Promise<void>;
export default mongooseLoader;
