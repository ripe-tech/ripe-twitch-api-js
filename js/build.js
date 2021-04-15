export const BuildAPI = superclass =>
    class extends superclass {
        async listBuilds(options = {}) {
            const url = this.baseUrl + "builds";
            const contents = await this.get(url, options);
            return contents;
        }
    };

export default BuildAPI;
