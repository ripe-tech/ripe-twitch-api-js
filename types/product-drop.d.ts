import { APIOptions } from "yonius";

import { Query } from "./query";

export interface ProductDrop {
    readonly id: string;
    readonly channel: string;
    readonly productCollection: string;
    readonly query: Query;
    readonly queries: string[];
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ProductDropCreate {
    readonly id?: number;
    readonly productCollection: string;
    readonly queries: string[];
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface ProductDropPatch {
    readonly productCollection?: string;
    readonly queries?: string[];
}

export declare class ProductDropAPI {
    listProductDrops(options: APIOptions): ProductDrop[];
    createProductDrop(payload: ProductDropCreate): ProductDrop;
    getProductDrop(id: string): ProductDrop;
    updateProductDrop(id: string, payload: ProductDropPatch): ProductDrop;
    deleteProductDrop(id: string): ProductDrop;
}
