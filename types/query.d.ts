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
    listQueries(options: APIOptions): Query[];
    createQuery(payload: QueryCreate): Query;
    getQuery(id: string): Query;
    updateQuery(id: string, payload: QueryPatch): Query;
    deleteQuery(id: string): Query;
}
