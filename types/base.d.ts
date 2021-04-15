import { BrandAPI } from "./brand";
import { BuilddAPI } from "./build";
import { CollectionAPI } from "./collection";
import { DropAPI } from "./drop";
import { OrderAPI } from "./order";
import { ProductCollectionAPI } from "./product-collection";
import { ProductDropAPI } from "./product-drop";
import { ProduuctDropFeedbackAPI } from "./product-drop-feedback";
import { StreamerAPI } from "./streamer";

export interface API extends BrandAPI,
    BuilddAPI,
    CollectionAPI,
    DropAPI,
    OrderAPI,
    ProductCollectionAPI,
    ProductDropAPI,
    ProduuctDropFeedbackAPI,
    StreamerAPI { }

export declare class API implements API {
    constructor(kwargs?: Record<string, unknown>);
    load(): Promise<void>;
    info(): Promise<Record<string, unknown>>;
}
