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
    };

export default CollectionAPI;
