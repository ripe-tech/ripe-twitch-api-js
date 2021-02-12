import { APIOptions } from "yonius";

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
    readonly amount: number;
    readonly currency: string;
    readonly status: Status;
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
    listOrders(options: APIOptions): Order[];
    getOrder(id: string): Order;
    createOrder(payload: OrderCreate): Order;
    updateOrder(id: string, payload: OrderPatch): Order;
    deleteOrder(id: string): Order;
    paypalOrder(id: string): { redirectUrl: string };
    stripeOrder(id: string): { clientSecret: string };
    payOrder(id: string): Order;
}
