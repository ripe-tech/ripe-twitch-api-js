import { APIOptions } from "yonius";

export interface Streamer {
    readonly id: string;
    readonly username: string;
    readonly logoUrl: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface StreamerCreate {
    readonly id?: number;
    readonly username: string;
    readonly logoUrl: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface StreamerPatch {
    readonly logoUrl?: string;
}

export declare class StreamerAPI {
    listStreamers(options: APIOptions): Streamer[];
    createStreamer(payload: StreamerCreate): Streamer;
    getStreamer(username: string): Streamer;
    updateStreamer(username: string, payload: StreamerPatch): Streamer;
    deleteStreamer(username: string): Streamer;
}
