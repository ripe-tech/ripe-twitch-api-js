/**
 * @class
 * @classdesc API for the Query entities.
 */
export const QueryAPI = superclass =>
    class extends superclass {
        /**
         * Returns all querys.
         *
         * @memberof QueryAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The query result list.
         */
        async listQueries(options = {}) {
            const url = this.baseUrl + "queries";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new query with the provided information.
         *
         * @memberof QueryAPI
         * @param {Query} payload An object that contains information about a query.
         * @returns {Promise} The created query.
         */
        async createQuery(payload) {
            const url = this.baseUrl + "queries";
            const query = await this.post(url, { dataJ: payload });
            return query;
        }

        /**
         * Returns the query with the provided id.
         *
         * @memberof QueryAPI
         * @param {String} id The id of the query.
         * @returns {Promise} The query requested.
         */
        async getQuery(id) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.get(url);
            return query;
        }

        /**
         * Updates the query with the provided information.
         *
         * @memberof QueryAPI
         * @param {String} id The id of the query.
         * @param {Object} payload An object that contains information about a query.
         * @returns {Promise} The updated query.
         */
        async updateQuery(id, payload) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.put(url, { dataJ: payload });
            return query;
        }

        /**
         * Deletes the query with the provided id.
         *
         * @memberof QueryAPI
         * @param {String} id The id of the query.
         * @returns {Promise} Empty response.
         */
        async deleteQuery(id) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.delete(url);
            return query;
        }
    };

export default QueryAPI;
