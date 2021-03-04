export const BrandAPI = superclass =>
    class extends superclass {
        async listBrands(options = {}) {
            const url = this.baseUrl + "brands";
            const contents = await this.get(url, options);
            return contents;
        }

        async createBrand(payload) {
            const url = this.baseUrl + "brands";
            const brand = await this.post(url, { dataJ: payload });
            return brand;
        }

        async getBrand(name) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.get(url);
            return brand;
        }

        async updateBrand(name, payload) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.put(url, { dataJ: payload });
            return brand;
        }

        async deleteBrand(name) {
            const url = this.baseUrl + `brands/${name}`;
            const brand = await this.delete(url);
            return brand;
        }
    };

export default BrandAPI;
