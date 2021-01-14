import { OrderAPI } from "./order";

export interface API extends OrderAPI {}

export declare class API implements API {
    constructor(kwargs?: Record<string, unknown>);
    load(): Promise<void>;
    info(): Promise<Record<string, unknown>>;
}
