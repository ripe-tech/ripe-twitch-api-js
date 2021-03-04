export const DropAPI = superclass =>
    class extends superclass {
        async listDrops(options = {}) {
            const url = this.baseUrl + "drops";
            const contents = await this.get(url, options);
            return contents;
        }

        async createDrop(payload) {
            const url = this.baseUrl + "drops";
            const drop = await this.post(url, { dataJ: payload });
            return drop;
        }

        async getDrop(id) {
            const url = this.baseUrl + `drops/${id}`;
            const drop = await this.get(url);
            return drop;
        }

        async updateDrop(id, payload) {
            const url = this.baseUrl + `drops/${id}`;
            const drop = await this.put(url, { dataJ: payload });
            return drop;
        }

        async deleteDrop(id) {
            const url = this.baseUrl + `drops/${id}`;
            const drop = await this.delete(url);
            return drop;
        }
    };

export default DropAPI;
