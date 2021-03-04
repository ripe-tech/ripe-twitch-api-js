export const QueryAPI = superclass =>
    class extends superclass {
        async listQueries(options = {}) {
            const url = this.baseUrl + "queries";
            const contents = await this.get(url, options);
            return contents;
        }

        async createQuery(payload) {
            const url = this.baseUrl + "queries";
            const query = await this.post(url, { dataJ: payload });
            return query;
        }

        async getQuery(id) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.get(url);
            return query;
        }

        async updateQuery(id, payload) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.put(url, { dataJ: payload });
            return query;
        }

        async deleteQuery(id) {
            const url = this.baseUrl + `queries/${id}`;
            const query = await this.delete(url);
            return query;
        }
    };

export default QueryAPI;
