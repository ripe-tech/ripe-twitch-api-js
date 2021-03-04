import { APIOptions } from "yonius";

export type Spec = {
    brand: string;
    model: string;
    parts: Part[];
    initials: string;
    engraving: string;
    initialsExtra: InitialsExtra;
    variant?: string;
    version?: string;
    description?: string;
};

export interface Address {
    readonly firstName: string;
    readonly lastName: string;
    readonly address: string;
    readonly postcode: string;
    readonly country: string;
    readonly state: string;
}

export enum Status {
    created = "created",
    waitingPayment = "waiting_payment",
    paid = "paid",
    sent = "sent",
    receivd = "received",
    returned = "returned",
    canceled = "canceled",
    completed = "completed"
}

export interface Order {
    readonly id: string;
    readonly user: string;
    readonly email: string;
    readonly shippingAddress: Address;
    readonly billingAddress: Address;
    readonly productQuery: string;
    readonly productSpec: Spec;
    readonly productSizeScaled: number;
    readonly productSize: number;
    readonly productScale: string;
    readonly productGender: string;
    readonly amount: number;
    readonly currency: string;
    readonly status: Status;
    readonly ripeOrder: number;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface OrderCreate {
    readonly id?: number;
    readonly user: string;
    readonly email: string;
    readonly shippingAddress: Address;
    readonly billingAddress: Address;
    readonly productQuery: string;
    readonly amount: number;
    readonly currency?: string;
    readonly status?: Status;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface OrderPatch {
    readonly user?: string;
    readonly email?: string;
    readonly shippingAddress?: Address;
    readonly billingAddress?: Address;
    readonly productQuery?: string;
    readonly amount?: number;
    readonly currency?: string;
    readonly status?: Status;
}

export declare class OrderAPI {
    listOrders(options: APIOptions): Promise<Order[]>;
    createOrder(payload: OrderCreate): Promise<Order>;
    getOrder(id: string): Promise<Order>;
    updateOrder(id: string, payload: OrderPatch): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
    paypalOrder(id: string): Promise<{ redirectUrl: string }>;
    stripeOrder(id: string): Promise<{ clientSecret: string }>;
    payOrder(id: string): Promise<Order>;
}
