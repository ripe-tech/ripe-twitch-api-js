import { OrderAPI } from "./order";

export interface API extends OrderAPI {}

export declare class API implements API {
    constructor(kwargs?: object);
    load(): Promise<void>;
    info(): Promise<object>;
}
