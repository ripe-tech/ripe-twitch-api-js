/**
 * @class
 * @classdesc API for the Order entities.
 */
export const OrderAPI = superclass =>
    class extends superclass {
        /**
         * Returns all orders.
         *
         * @memberof OrderAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The order result list.
         */
        async listOrders(options = {}) {
            const url = this.baseUrl + "orders";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns the order with the provided id.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @returns {Promise} The order requested.
         */
        async getOrder(id) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.get(url);
            return order;
        }

        /**
         * Creates a new order with the provided information.
         *
         * @memberof OrderAPI
         * @param {Order} payload An object that contains information about an order.
         * @returns {Promise} The created order.
         */
        async createOrder(payload) {
            const url = this.baseUrl + "orders";
            const order = await this.post(url, { dataJ: payload });
            return order;
        }

        /**
         * Updates the order with the provided information.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @param {Object} payload An object that contains information about an order.
         * @returns {Promise} The updated order.
         */
        async updateOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        /**
         * Deletes the order with the provided id.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @returns {Promise} Empty response.
         */
        async deleteOrder(id) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.delete(url);
            return order;
        }

        /**
         * Creates a PayPal payment for the order with the provided id.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @param {Object} payload An object that contains information about the return URl
         * to redirect to after the PayPal authentication process.
         * @returns {Promise} The updated order.
         */
        async paypalOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}/paypal`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        /**
         * Completes the payment process for the order with the provided id.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @returns {Promise} The updated order.
         */
        async payOrder(id) {
            const url = this.baseUrl + `orders/${id}/pay`;
            const order = await this.put(url);
            return order;
        }
    };

export default OrderAPI;
