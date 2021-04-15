import { BrandAPI } from "./brand";
import { BuilddAPI } from "./build";
import { CollectionAPI } from "./collection";
import { DropAPI } from "./drop";
import { OrderAPI } from "./order";
import { ProductCollectionAPI } from "./product-collection";
import { ProductDropAPI } from "./product-drop";
import { PusherTriggerAPI } from "./pusher-trigger";
import { QueryAPI } from "./query";
import { StreamerAPI } from "./streamer";

export interface API extends BrandAPI,
    BuilddAPI,
    CollectionAPI,
    DropAPI,
    OrderAPI,
    ProductCollectionAPI,
    ProductDropAPI,
    PusherTriggerAPI,
    QueryAPI,
    StreamerAPI { }

export declare class API implements API {
    constructor(kwargs?: Record<string, unknown>);
    load(): Promise<void>;
    info(): Promise<Record<string, unknown>>;
}
