/**
 * @class
 * @classdesc API for the Drop entities.
 */
export const DropAPI = superclass =>
    class extends superclass {
        /**
         * Returns all drops.
         *
         * @memberof DropAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The drop result list.
         */
        async listDrops(options = {}) {
            const url = this.baseUrl + "drops";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new drop with the provided information.
         *
         * @memberof DropAPI
         * @param {Drop} payload An object that contains information about a drop.
         * @returns {Promise} The created drop.
         */
        async createDrop(payload) {
            const url = this.baseUrl + "drops";
            const drop = await this.post(url, { dataJ: payload });
            return drop;
        }

        /**
         * Returns the drop with the provided id.
         *
         * @memberof DropAPI
         * @param {String} id The id of the drop.
         * @returns {Promise} The drop requested.
         */
        async getDrop(id) {
            const url = this.baseUrl + `drops/${id}`;
            const drop = await this.get(url);
            return drop;
        }

        /**
         * Updates the drop with the provided information.
         *
         * @memberof DropAPI
         * @param {String} id The id of the drop.
         * @param {Object} payload An object that contains information about a drop.
         * @returns {Promise} The updated drop.
         */
        async updateDrop(id, payload) {
            const url = this.baseUrl + `drops/${id}`;
            const drop = await this.put(url, { dataJ: payload });
            return drop;
        }

        /**
         * Deletes the drop with the provided id.
         *
         * @memberof DropAPI
         * @param {String} id The id of the drop.
         * @returns {Promise} Empty response.
         */
        async deleteDrop(id) {
            const url = this.baseUrl + `drops/${id}`;
            return await this.delete(url);
        }
    };

export default DropAPI;
