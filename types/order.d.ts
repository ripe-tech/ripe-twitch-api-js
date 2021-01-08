export interface Options {
    readonly fields?: Array<string>,
    readonly eager?: Boolean,
    readonly eagerL?: Boolean,
    readonly map?: Boolean,
    readonly rules?: Boolean,
    readonly meta?: Boolean,
    readonly build?: Boolean,
    readonly fill?: Boolean,
    readonly resolveA?: Boolean,
    readonly skip?: Number,
    readonly limit?: Number,
    readonly sort?: Array<Object>,
    readonly raiseE?: Boolean,
}

export enum Currency {
    EUR = "EUR",
    USD = "USD",
    GBP = "GBP",
    BRL = "BRL",
    CAD = "CAD",
    AUD = "AUD",
    JPY = "JPY",
    RUB = "RUB",
    KRW = "KRW",
    CHF = "CHF",
    SGD = "SGD",
    MXN = "MXN"
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
    readonly shippingAddress: string;
    readonly billingAddress: string;
    readonly productQuery: string;
    readonly amount: number;
    readonly currency: Currency;
    readonly status: Status;
    readonly payment: Record<string, string>;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface OrderCreate {
    readonly user?: string;
    readonly name?: string;
    readonly shippingAddress?: string;
    readonly billingAddress?: string;
    readonly productQuery?: string;
    readonly amount?: number;
    readonly currency?: Currency;
    readonly status?: Status;
}

export interface OrderPatch {
    readonly user?: string;
    readonly name?: string;
    readonly shippingAddress?: string;
    readonly billingAddress?: string;
    readonly productQuery?: string;
    readonly amount?: number;
    readonly currency?: Currency;
    readonly status?: Status;
    readonly payment?: Record<string, string>;
}


export declare class OrderAPI {
    listOrders(options: Options): Array<Order>;
    getOrder(id: string): Order;
    createOrder(payload: OrderCreate): Order;
    updateOrder(id: string, payload: OrderPatch): Order;
    deleteOrder(id: string): Order;
}
