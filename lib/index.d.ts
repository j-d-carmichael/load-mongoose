import { ConnectOptions } from 'mongoose';
export declare type Config = {
    mongoAdditionalParams?: string;
    mongoDatabase?: string;
    mongoHost?: string;
    mongoPassword?: string;
    mongoPort?: string;
    mongoUri?: string;
    mongoUser?: string;
    mongoOpts?: ConnectOptions;
};
declare const mongooseLoader: (config: Config) => Promise<void>;
export default mongooseLoader;
