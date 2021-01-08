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
         * @param {String} name The id of the order.
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
         * @param {String} name The id of the order.
         * @param {Object} payload An object that contains information about an order.
         * @returns {Promise} The updated order.
         */
        async updateOrder(id, payload) {
            const url = this.baseUrl + `orders/${id}`;
            const order = await this.put(url, { dataJ: payload });
            return order;
        }

        /**
         * Deletes the order with the provided name.
         *
         * @memberof OrderAPI
         * @param {String} name The id of the order.
         * @returns {Promise} Empty response.
         */
        async deleteOrder(name) {
            const url = this.baseUrl + `orders/${name}`;
            const order = await this.delete(url);
            return order;
        }

        /**
         * Creates a PaymentIntent entity within Stripe.
         * Saves the PaymentIntent ID and the client secret in the order.
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @returns {Promise} The updated order.
         */
        async createStripePaymentIntent(id) {
            const url = this.baseUrl + `orders/${id}/stripe`;
            const order = await this.put(url);
            return order;
        }

        /**
         * Updates an order, marking it as paid, if and only if:
         *  - a PaymentIntent ID exists in the order
         *  - Stripe confirms that PaymentIntent was successful
         *
         * @memberof OrderAPI
         * @param {String} id The id of the order.
         * @returns {Promise} The updated order.
         */
        async markOrderAsPaid(id) {
            const url = this.baseUrl + `orders/${id}/pay`;
            const order = await this.put(url);
            return order;
        }
    };

export default OrderAPI;
