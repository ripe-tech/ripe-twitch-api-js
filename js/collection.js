/**
 * @class
 * @classdesc API for the Collection entities.
 */
export const CollectionAPI = superclass =>
    class extends superclass {
        /**
         * Returns all collections.
         *
         * @memberof CollectionAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The collection result list.
         */
        async listCollections(options = {}) {
            const url = this.baseUrl + "collections";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new collection with the provided information.
         *
         * @memberof CollectionAPI
         * @param {Collection} payload An object that contains information about a collection.
         * @returns {Promise} The created collection.
         */
        async createCollection(payload) {
            const url = this.baseUrl + "collections";
            const collection = await this.post(url, { dataJ: payload });
            return collection;
        }

        /**
         * Returns the collection with the provided id.
         *
         * @memberof CollectionAPI
         * @param {String} id The id of the collection.
         * @returns {Promise} The collection requested.
         */
        async getCollection(id) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.get(url);
            return collection;
        }

        /**
         * Updates the collection with the provided information.
         *
         * @memberof CollectionAPI
         * @param {String} id The id of the collection.
         * @param {Object} payload An object that contains information about a collection.
         * @returns {Promise} The updated collection.
         */
        async updateCollection(id, payload) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.put(url, { dataJ: payload });
            return collection;
        }

        /**
         * Deletes the collection with the provided id.
         *
         * @memberof CollectionAPI
         * @param {String} id The id of the collection.
         * @returns {Promise} Empty response.
         */
        async deleteCollection(id) {
            const url = this.baseUrl + `collections/${id}`;
            const collection = await this.delete(url);
            return collection;
        }
    };

export default CollectionAPI;
