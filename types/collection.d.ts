import { APIOptions } from "yonius";

export interface Collection {
    readonly id: string;
    readonly name: string;
    readonly brand: string;
    readonly streamers: string[];
    readonly products: string[];
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
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface CollectionPatch {
    readonly name?: string;
    readonly brand?: string;
    readonly streamers?: string[];
    readonly products?: string[];
}

export declare class CollectionAPI {
    listCollections(options: APIOptions): Collection[];
    createCollection(payload: CollectionCreate): Collection;
    getCollection(id: string): Collection;
    updateCollection(id: string, payload: CollectionPatch): Collection;
    deleteCollection(id: string): Collection;
}
