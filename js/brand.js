/**
 * @class
 * @classdesc API for the Brand entities.
 */
export const BrandAPI = superclass =>
    class extends superclass {
        /**
         * Returns all brands.
         *
         * @memberof BrandAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The brand result list.
         */
        async listBrands(options = {}) {
            const url = this.baseUrl + "brands";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new brand with the provided information.
         *
         * @memberof BrandAPI
         * @param {Brand} payload An object that contains information about a brand.
         * @returns {Promise} The created brand.
         */
        async createBrand(payload) {
            const url = this.baseUrl + "brands";
            const brand = await this.post(url, { dataJ: payload });
            return brand;
        }

        /**
         * Returns the brand with the provided name.
         *
         * @memberof BrandAPI
         * @param {String} name The name of the brand.
         * @returns {Promise} The brand requested.
         */
        async getBrand(name) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.get(url);
            return brand;
        }

        /**
         * Updates the brand with the provided information.
         *
         * @memberof BrandAPI
         * @param {String} name The name of the brand.
         * @param {Object} payload An object that contains information about a brand.
         * @returns {Promise} The updated brand.
         */
        async updateBrand(name, payload) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.put(url, { dataJ: payload });
            return brand;
        }

        /**
         * Deletes the brand with the provided name.
         *
         * @memberof BrandAPI
         * @param {String} name The name of the brand.
         * @returns {Promise} Empty response.
         */
        async deleteBrand(name) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.delete(url);
            return brand;
        }
    };

export default BrandAPI;
