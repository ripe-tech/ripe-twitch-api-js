import { APIOptions } from "yonius";

import { ProductCollection, ProductCollectionCreate } from "./product-collection";

export enum StatusCollection {
    active = "active",
    inactive = "inactive"
}

export interface Collection {
    readonly id: string;
    readonly name: string;
    readonly brand: string;
    readonly streamers: string[];
    readonly products: string[];
    readonly status: StatusCollection;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface CollectionCreate {
    readonly id?: number;
    readonly name: string;
    readonly brand: string;
    readonly streamers?: string[];
    readonly products?: string[];
    readonly status?: StatusCollection;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface CollectionPatch {
    readonly name?: string;
    readonly brand?: string;
    readonly streamers?: string[];
    readonly products?: string[];
    readonly status?: StatusCollection;
}

export declare class CollectionAPI {
    listCollections(options: APIOptions): Promise<Collection[]>;
    createCollection(payload: CollectionCreate): Promise<Collection>;
    getCollection(id: string): Promise<Collection>;
    updateCollection(id: string, payload: CollectionPatch): Promise<Collection>;
    deleteCollection(id: string): Promise<void>;
    createProductCollectionCollection(id: string, payload: ProductCollectionCreate): Promise<ProductCollection>;
    deleteProductCollectionCollection(id: string, product: string): Promise<void>;
    addStreamerCollection(id: string, payload: { streamer: string }): Promise<Collection>;
    removeStreamerCollection(id: string, streamer: string): Promise<void>;
}
