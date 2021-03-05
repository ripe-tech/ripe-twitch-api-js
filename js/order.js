export const OrderAPI = superclass =>
    class extends superclass {
        async listOrders(options = {}) {
            const url = this.baseUrl + "orders";
            const contents = await this.get(url, options);
            return contents;
        }

        async createOrder(payload) {
            const url = this.baseUrl + "orders";
            const order = await this.post(url, { dataJ: payload });
            return order;
        }

        async getOrder(id) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.get(url);
            return order;
        }

        async updateOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        async deleteOrder(id) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.delete(url);
            return order;
        }

        async paypalOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}/paypal`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        async stripeOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}/stripe`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        async payOrder(id) {
            const url = this.baseUrl + `orders/${id}/pay`;
            const order = await this.put(url);
            return order;
        }
    };

export default OrderAPI;
