import { API as BaseAPI, mix, load, conf } from "yonius";
import { BrandAPI } from "./brand";
import { BuildAPI } from "./build";
import { CollectionAPI } from "./collection";
import { DropAPI } from "./drop";
import { OrderAPI } from "./order";
import { ProductCollectionAPI } from "./product-collection";
import { ProductDropAPI } from "./product-drop";
import { QueryAPI } from "./query";
import { StreamerAPI } from "./streamer";

const BASE_URL = "http://localhost:3000/";

export class API extends mix(BaseAPI).with(
    BrandAPI,
    BuildAPI,
    CollectionAPI,
    DropAPI,
    OrderAPI,
    ProductCollectionAPI,
    ProductDropAPI,
    QueryAPI,
    StreamerAPI
) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("BASE_URL", BASE_URL);
        this.token = conf("TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
        this.tokenTwitch = kwargs.tokenTwitch === undefined ? null : kwargs.tokenTwitch;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth) {
            if (this.token) options.headers.Authorization = `Bearer ${this.token}`;
            if (this.tokenTwitch) {
                options.headers.AuthorizationTwitch = `Bearer ${this.tokenTwitch}`;
            }
        }
    }

    async info() {
        const url = this.baseUrl + "info";
        const contents = await this.get(url);
        return contents;
    }
}

export default API;
