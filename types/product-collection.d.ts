import { APIOptions } from "yonius";

export interface ProductCollection {
    readonly id: string;
    readonly name: string;
    readonly query: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ProductCollectionCreate {
    readonly id?: number;
    readonly name: string;
    readonly query: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface ProductCollectionPatch {
    readonly name?: string;
    readonly query?: string;
}

export declare class ProductCollectionAPI {
    listProductCollections(options: APIOptions): ProductCollection[];
    createProductCollection(payload: ProductCollectionCreate): ProductCollection;
    getProductCollection(id: string): ProductCollection;
    updateProductCollection(id: string, payload: ProductCollectionPatch): ProductCollection;
    deleteProductCollection(id: string): ProductCollection;
}
