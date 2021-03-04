export const ProductCollectionAPI = superclass =>
    class extends superclass {
        async listProductCollections(options = {}) {
            const url = this.baseUrl + "product_collections";
            const contents = await this.get(url, options);
            return contents;
        }

        async createProductCollection(payload) {
            const url = this.baseUrl + "product_collections";
            const productCollection = await this.post(url, { dataJ: payload });
            return productCollection;
        }

        async getProductCollection(id) {
            const url = this.baseUrl + `product_collections/${id}`;
            const productCollection = await this.get(url);
            return productCollection;
        }

        async updateProductCollection(id, payload) {
            const url = this.baseUrl + `product_collections/${id}`;
            const productCollection = await this.put(url, { dataJ: payload });
            return productCollection;
        }

        async deleteProductCollection(id) {
            const url = this.baseUrl + `product_collections/${id}`;
            const productCollection = await this.delete(url);
            return productCollection;
        }
    };

export default ProductCollectionAPI;
