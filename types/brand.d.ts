import { APIOptions } from "yonius";

export interface Brand {
    readonly id: string;
    readonly name: string;
    readonly logoUrl: string;
    readonly created: number;
    readonly modified: number;
    readonly meta: Record<string, unknown>;
}

export interface BrandCreate {
    readonly id?: number;
    readonly name: string;
    readonly logoUrl: string;
    readonly created?: number;
    readonly modified?: number;
    readonly meta?: Record<string, unknown>;
}

export interface BrandPatch {
    readonly logoUrl?: string;
}

export declare class BrandAPI {
    listBrands(options: APIOptions): Brand[];
    createBrand(payload: BrandCreate): Brand;
    getBrand(name: string): Brand;
    updateBrand(name: string, payload: BrandPatch): Brand;
    deleteBrand(name: string): Brand;
}
