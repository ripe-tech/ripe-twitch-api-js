import { Response } from "node-fetch";
import { APIOptions } from "yonius";

export interface ProductDrop {
    readonly id: string;
    readonly name: string;
    readonly drop: string;
    readonly channel: string;
    readonly productCollection: string;
    readonly query: string;
    readonly likes: number;
    readonly dislikes: number;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ProductDropCreate {
    readonly id?: number;
    readonly name?: string;
    readonly productCollection: string;
    readonly query: string;
    readonly likes?: number;
    readonly dislikes?: number;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface ProductDropPatch {
    readonly name?: string;
    readonly productCollection?: string;
    readonly query?: string;
    readonly likes?: number;
    readonly dislikes?: number;
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
    likeProductDrop(id: string, payload: ProductDropRating): Promise<ProductDrop>;
    dislikeProductDrop(id: string, payload: ProductDropRating): Promise<ProductDrop>;
    eventProductDrop(id: string, event:string, payload: string): Promise<Response>;
}
