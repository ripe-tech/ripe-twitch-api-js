export interface Options {
    readonly fields?: string[],
    readonly eager?: boolean,
    readonly eagerL?: boolean,
    readonly map?: boolean,
    readonly rules?: boolean,
    readonly meta?: boolean,
    readonly build?: boolean,
    readonly fill?: boolean,
    readonly resolveA?: boolean,
    readonly skip?: number,
    readonly limit?: number,
    readonly sort?: unknown[][],
    readonly raiseE?: boolean,
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
    readonly name: string;
    readonly email: string;
    readonly shippingAddress: string;
    readonly billingAddress: string;
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
    readonly name: string;
    readonly email: string;
    readonly shippingAddress: string;
    readonly billingAddress: string;
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
    readonly name?: string;
    readonly email?: string;
    readonly shippingAddress?: string;
    readonly billingAddress?: string;
    readonly productQuery?: string;
    readonly amount?: number;
    readonly currency?: string;
    readonly status?: Status;
}

export declare class OrderAPI {
    listOrders(options: Options): Order[];
    getOrder(id: string): Order;
    createOrder(payload: OrderCreate): Order;
    updateOrder(id: string, payload: OrderPatch): Order;
    deleteOrder(id: string): Order;
    paypalOrder(id: string): { redirectUrl: string };
    stripeOrder(id: string): { clientSecret: string };
    payOrder(id: string): Order;
}
