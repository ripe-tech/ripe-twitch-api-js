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
    listCollections(options: APIOptions): Promise<Collection[]>;
    createCollection(payload: CollectionCreate): Promise<Collection>;
    getCollection(id: string): Promise<Collection>;
    updateCollection(id: string, payload: CollectionPatch): Promise<Collection>;
    deleteCollection(id: string): Promise<void>;
}
