import { APIOptions } from "yonius";

export interface Query {
    readonly id: string;
    readonly query: string;
    readonly likes: string[];
    readonly dislikes: string[];
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface QueryCreate {
    readonly id?: number;
    readonly query: string;
    readonly likes: string[];
    readonly dislikes: string[];
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface QueryPatch {
    readonly query?: string;
    readonly likes?: string[];
    readonly dislikes?: string[];
}

export declare class QueryAPI {
    listQueries(options: APIOptions): Promise<Query[]>;
    createQuery(payload: QueryCreate): Promise<Query>;
    getQuery(id: string): Promise<Query>;
    updateQuery(id: string, payload: QueryPatch): Promise<Query>;
    deleteQuery(id: string): Promise<void>;
}
