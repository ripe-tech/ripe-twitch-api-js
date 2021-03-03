/**
 * @class
 * @classdesc API for the ProductDrop entities.
 */
export const ProductDropAPI = superclass =>
    class extends superclass {
        /**
         * Returns all product of a drop.
         *
         * @memberof ProductDropAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The product result list.
         */
        async listProductDrops(options = {}) {
            const url = this.baseUrl + "product_drops";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new product with the provided information.
         *
         * @memberof ProductDropAPI
         * @param {ProductDrop} payload An object that contains information about a product.
         * @returns {Promise} The created product.
         */
        async createProductDrop(payload) {
            const url = this.baseUrl + "product_drops";
            const productDrop = await this.post(url, { dataJ: payload });
            return productDrop;
        }

        /**
         * Returns the product with the provided id.
         *
         * @memberof ProductDropAPI
         * @param {String} id The id of the product.
         * @returns {Promise} The product requested.
         */
        async getProductDrop(id) {
            const url = this.baseUrl + `product_drops/${id}`;
            const productDrop = await this.get(url);
            return productDrop;
        }

        /**
         * Updates the product with the provided information.
         *
         * @memberof ProductDropAPI
         * @param {String} id The id of the product_drop.
         * @param {Object} payload An object that contains information about a product.
         * @returns {Promise} The updated product.
         */
        async updateProductDrop(id, payload) {
            const url = this.baseUrl + `product_drops/${id}`;
            const productDrop = await this.put(url, { dataJ: payload });
            return productDrop;
        }

        /**
         * Deletes the product with the provided id.
         *
         * @memberof ProductDropAPI
         * @param {String} id The id of the product.
         * @returns {Promise} Empty response.
         */
        async deleteProductDrop(id) {
            const url = this.baseUrl + `product_drops/${id}`;
            return await this.delete(url);
        }
    };

export default ProductDropAPI;
