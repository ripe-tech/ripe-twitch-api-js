/**
 * @class
 * @classdesc API for the ProductCollection entities.
 */
export const ProductCollectionAPI = superclass =>
    class extends superclass {
        /**
         * Returns all product of a collection.
         *
         * @memberof ProductCollectionAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The product result list.
         */
        async listProductCollections(options = {}) {
            const url = this.baseUrl + "product_collections";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new product with the provided information.
         *
         * @memberof ProductCollectionAPI
         * @param {ProductCollection} payload An object that contains information about a product.
         * @returns {Promise} The created product.
         */
        async createProductCollection(payload) {
            const url = this.baseUrl + "product_collections";
            const productCollection = await this.post(url, { dataJ: payload });
            return productCollection;
        }

        /**
         * Returns the product with the provided id.
         *
         * @memberof ProductCollectionAPI
         * @param {String} id The id of the product.
         * @returns {Promise} The product requested.
         */
        async getProductCollection(id) {
            const url = this.baseUrl + `product_collections/${id}`;
            const productCollection = await this.get(url);
            return productCollection;
        }

        /**
         * Updates the product with the provided information.
         *
         * @memberof ProductCollectionAPI
         * @param {String} id The id of the product_collection.
         * @param {Object} payload An object that contains information about a product.
         * @returns {Promise} The updated product.
         */
        async updateProductCollection(id, payload) {
            const url = this.baseUrl + `product_collections/${id}`;
            const productCollection = await this.put(url, { dataJ: payload });
            return productCollection;
        }

        /**
         * Deletes the product with the provided id.
         *
         * @memberof ProductCollectionAPI
         * @param {String} id The id of the product.
         * @returns {Promise} Empty response.
         */
        async deleteProductCollection(id) {
            const url = this.baseUrl + `product_collections/${id}`;
            return await this.delete(url);
        }
    };

export default ProductCollectionAPI;
