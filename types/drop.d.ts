import { APIOptions } from "yonius";

import { ProductDrop, ProductDropCreate } from "./product-drop";

export enum StatusDrop {
    open = "open",
    ongoing = "ongoing",
    closed = "closed"
}

export interface Drop {
    readonly id: string;
    readonly streamer: string;
    readonly _collection: string;
    readonly channel: string;
    readonly status: StatusDrop;
    readonly products: string[];
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface DropCreate {
    readonly id?: number;
    readonly streamer: string;
    readonly _collection: string;
    readonly status?: StatusDrop;
    readonly products: string[];
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface DropPatch {
    readonly streamer?: string;
    readonly _collection?: string;
    readonly status?: StatusDrop;
    readonly products?: string[];
}

export type DropEager = Omit<Drop, "products"> & { products: ProductDrop[] };

export declare class DropAPI {
    listDrops(options: APIOptions): Promise<Drop[]>;
    createDrop(payload: DropCreate): Promise<Drop>;
    getDrop(id: string): Promise<Drop>;
    getEagerDrop(id: string): Promise<DropEager>;
    updateDrop(id: string, payload: DropPatch): Promise<Drop>;
    deleteDrop(id: string): Promise<void>;
    createProductDropDrop(id: string, payload: ProductDropCreate): Promise<ProductDrop>;
    deleteProductDropDrop(id: string, product: string): Promise<void>;
}
