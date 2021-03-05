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

export interface ProductDropRating {
    readonly viewer: string;
}

export declare class ProductDropAPI {
    listProductDrops(options: APIOptions): Promise<ProductDrop[]>;
    createProductDrop(payload: ProductDropCreate): Promise<ProductDrop>;
    getProductDrop(id: string): Promise<ProductDrop>;
    updateProductDrop(id: string, payload: ProductDropPatch): Promise<ProductDrop>;
    deleteProductDrop(id: string): Promise<void>;
    like(id: string, payload: ProductDropRating): Promise<ProductDrop>;
    dislike(id: string, payload: ProductDropRating): Promise<ProductDrop>;
}
