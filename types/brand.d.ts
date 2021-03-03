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
    listBrands(options: APIOptions): Promise<Brand[]>;
    createBrand(payload: BrandCreate): Promise<Brand>;
    getBrand(name: string): Promise<Brand>;
    updateBrand(name: string, payload: BrandPatch): Promise<Brand>;
    deleteBrand(name: string): Promise<void>;
}
