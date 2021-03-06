export const CollectionAPI = superclass =>
    class extends superclass {
        async listCollections(options = {}) {
            const url = this.baseUrl + "collections";
            const contents = await this.get(url, options);
            return contents;
        }

        async createCollection(payload) {
            const url = this.baseUrl + "collections";
            const collection = await this.post(url, { dataJ: payload });
            return collection;
        }

        async getCollection(id) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.get(url);
            return collection;
        }

        async getEagerCollection(id) {
            const url = this.baseUrl + `collections/${id}/eager`;
            const collection = await this.get(url);
            return collection;
        }

        async updateCollection(id, payload) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.put(url, { dataJ: payload });
            return collection;
        }

        async deleteCollection(id) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.delete(url);
            return collection;
        }

        async createProductCollectionCollection(id, payload) {
            const url = this.baseUrl + `collections/${id}/products`;
            const productCollection = await this.post(url, { dataJ: payload });
            return productCollection;
        }

        async deleteProductCollectionCollection(id, product) {
            const url = this.baseUrl + `collections/${id}/products/${product}`;
            const productCollection = await this.delete(url);
            return productCollection;
        }

        async addStreamerCollection(id, payload) {
            const url = this.baseUrl + `collections/${id}/streamers`;
            const collection = await this.post(url, { dataJ: payload });
            return collection;
        }

        async removeStreamerCollection(id, streamer) {
            const url = this.baseUrl + `collections/${id}/streamers/${streamer}`;
            const collection = await this.delete(url);
            return collection;
        }
    };

export default CollectionAPI;
