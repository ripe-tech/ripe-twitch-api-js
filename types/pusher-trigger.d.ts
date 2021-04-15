export interface PusherTrigger {
    readonly channel: string;
    readonly event: string;
    readonly payload: string;
}

export declare class ProductDropAPI {
    pusherTrigger(payload: PusherTrigger): Promise<any>;
}
