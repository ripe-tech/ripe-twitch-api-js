export const ProductDropAPI = superclass =>
    class extends superclass {
        async listProductDrops(options = {}) {
            const url = this.baseUrl + "product_drops";
            const contents = await this.get(url, options);
            return contents;
        }

        async createProductDrop(payload) {
            const url = this.baseUrl + "product_drops";
            const productDrop = await this.post(url, { dataJ: payload });
            return productDrop;
        }

        async getProductDrop(id) {
            const url = this.baseUrl + `product_drops/${id}`;
            const productDrop = await this.get(url);
            return productDrop;
        }

        async updateProductDrop(id, payload) {
            const url = this.baseUrl + `product_drops/${id}`;
            const productDrop = await this.put(url, { dataJ: payload });
            return productDrop;
        }

        async deleteProductDrop(id) {
            const url = this.baseUrl + `product_drops/${id}`;
            const productDrop = await this.delete(url);
            return productDrop;
        }

        /**
         * Adds a viewer like to the current product customization.
         *
         * @memberof ProductDropAPI
         * @param {String} id The id of the product_drop.
         * @param {Object} payload An object that contains the viewer username.
         * @returns {Promise} The updated product.
         */
        async like(id, payload) {
            const url = this.baseUrl + `product_drops/${id}/like`;
            const productDrop = await this.put(url, { dataJ: payload });
            return productDrop;
        }

        /**
         * Adds a viewer dislike to the current product customization.
         *
         * @memberof ProductDropAPI
         * @param {String} id The id of the product_drop.
         * @param {Object} payload An object that contains the viewer username.
         * @returns {Promise} The updated product.
         */
        async dislike(id, payload) {
            const url = this.baseUrl + `product_drops/${id}/dislike`;
            const productDrop = await this.put(url, { dataJ: payload });
            return productDrop;
        }
    };

export default ProductDropAPI;
