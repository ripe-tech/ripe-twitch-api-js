import { APIOptions } from "yonius";

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

export declare class DropAPI {
    listDrops(options: APIOptions): Drop[];
    createDrop(payload: DropCreate): Drop;
    getDrop(id: string): Drop;
    updateDrop(id: string, payload: DropPatch): Drop;
    deleteDrop(id: string): Drop;
}