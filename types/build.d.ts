import { APIOptions } from "yonius";

export interface Build {
    readonly id: number;
    readonly name: string;
    readonly identifier: string;
    readonly type: string;
    readonly latest: string;
    readonly latest_timestamp: number;
    readonly branches: string[];
    readonly user?: string;
    readonly version_b: string;
    readonly build_s: string;
    readonly build_fqn: string;
    readonly size: number;
    readonly tags_s: string;
    readonly sources_s: string;
    readonly size_s: string;
    readonly is_installed: boolean;
    readonly is_installed_b: boolean;
    readonly is_local: boolean;
    readonly is_latest: boolean;
    readonly modified_s: string;
    readonly local?: Record<string, unknown>;
    readonly status: string;
    readonly status_f: string;
    readonly status_l: string;
    readonly status_b: string;
};

export declare class BuilddAPI {
    listBuilds(options: APIOptions): Promise<Build[]>;
}
