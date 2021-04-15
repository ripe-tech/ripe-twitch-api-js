export interface PusherTrigger {
    readonly channel: string;
    readonly event: string;
    readonly payload: string;
}

export declare class PusherTriggerAPI {
    pusherTrigger(payload: PusherTrigger): Promise<any>;
}
