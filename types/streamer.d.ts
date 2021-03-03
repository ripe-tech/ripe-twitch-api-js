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
    listStreamers(options: APIOptions): Promise<Streamer[]>;
    createStreamer(payload: StreamerCreate): Promise<Streamer>;
    getStreamer(username: string): Promise<Streamer>;
    updateStreamer(username: string, payload: StreamerPatch): Promise<Streamer>;
    deleteStreamer(username: string): Promise<void>;
}
