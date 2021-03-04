import { BrandAPI } from "./brand";
import { CollectionAPI } from "./collection";
import { DropAPI } from "./drop";
import { OrderAPI } from "./order";
import { ProductCollectionAPI } from "./product-collection";
import { ProductDropAPI } from "./product-drop";
import { QueryAPI } from "./query";
import { StreamerAPI } from "./streamer";

export interface API extends BrandAPI,
    CollectionAPI,
    DropAPI,
    OrderAPI,
    ProductCollectionAPI,
    ProductDropAPI,
    QueryAPI,
    StreamerAPI { }

export declare class API implements API {
    constructor(kwargs?: Record<string, unknown>);
    load(): Promise<void>;
    info(): Promise<Record<string, unknown>>;
}
