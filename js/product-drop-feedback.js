export const ProductDropFeedbackAPI = superclass =>
    class extends superclass {
        async listProductDropFeedbacks(options = {}) {
            const url = this.baseUrl + "product_drop_feedbacks";
            const contents = await this.get(url, options);
            return contents;
        }

        async createProductDropFeedback(payload) {
            const url = this.baseUrl + "product_drop_feedbacks";
            const productDropFeedback = await this.post(url, { dataJ: payload });
            return productDropFeedback;
        }

        async getProductDropFeedback(id) {
            const url = this.baseUrl + `product_drop_feedbacks/${id}`;
            const productDropFeedback = await this.get(url);
            return productDropFeedback;
        }

        async updateProductDropFeedback(id, payload) {
            const url = this.baseUrl + `product_drop_feedbacks/${id}`;
            const productDropFeedback = await this.put(url, { dataJ: payload });
            return productDropFeedback;
        }

        async deleteProductDropFeedback(id) {
            const url = this.baseUrl + `product_drop_feedbacks/${id}`;
            const productDropFeedback = await this.delete(url);
            return productDropFeedback;
        }
    };

export default ProductDropFeedbackAPI;
