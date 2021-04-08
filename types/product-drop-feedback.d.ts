import { APIOptions } from "yonius";

export enum FeedbackState {
    none = "none",
    like = "like",
    dislike = "dislike"
}

export interface ProductDropFeedback {
    readonly id: string;
    readonly username: string;
    readonly product: string;
    readonly state: FeedbackState;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface ProductDropFeedbackCreate {
    readonly id?: number;
    readonly username: string;
    readonly product: string;
    readonly state?: FeedbackState;
    readonly queries: string[];
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface ProductDropFeedbackPatch {
    readonly username?: string;
    readonly product?: string;
    readonly state?: FeedbackState;
}

export declare class ProductDropAPI {
    listProductDropFeedbacks(options: APIOptions): Promise<ProductDropFeedback[]>;
    createProductDropFeedback(payload: ProductDropFeedbackCreate): Promise<ProductDropFeedback>;
    getProductDropFeedback(id: string): Promise<ProductDropFeedback>;
    updateProductDropFeedback(id: string, payload: ProductDropFeedbackPatch): Promise<ProductDropFeedback>;
    deleteProductDropFeedback(id: string): Promise<void>;
}
