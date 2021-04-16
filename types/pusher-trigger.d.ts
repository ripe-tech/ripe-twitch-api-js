export interface PusherTrigger {
    readonly channel: string;
    readonly event: string;
    readonly payload: string;
}

export interface PusherTriggerResponse {
    readonly size: number;
    readonly timeout: number;
}

export declare class PusherTriggerAPI {
    pusherTrigger(payload: PusherTrigger): Promise<PusherTriggerResponse>;
}
