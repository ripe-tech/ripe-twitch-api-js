/**
 * @class
 * @classdesc API for the Streamer entities.
 */
export const StreamerAPI = superclass =>
    class extends superclass {
        /**
         * Returns all streamers.
         *
         * @memberof StreamerAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The streamer result list.
         */
        async listStreamers(options = {}) {
            const url = this.baseUrl + "streamers";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new streamer with the provided information.
         *
         * @memberof StreamerAPI
         * @param {Streamer} payload An object that contains information about a streamer.
         * @returns {Promise} The created streamer.
         */
        async createStreamer(payload) {
            const url = this.baseUrl + "streamers";
            const streamer = await this.post(url, { dataJ: payload });
            return streamer;
        }

        /**
         * Returns the streamer with the provided username.
         *
         * @memberof StreamerAPI
         * @param {String} username The username of the streamer.
         * @returns {Promise} The streamer requested.
         */
        async getStreamer(username) {
            const url = this.baseUrl + `streamers/${username}`;
            const streamer = await this.get(url);
            return streamer;
        }

        /**
         * Updates the streamer with the provided information.
         *
         * @memberof StreamerAPI
         * @param {String} username The username of the streamer.
         * @param {Object} payload An object that contains information about a streamer.
         * @returns {Promise} The updated streamer.
         */
        async updateStreamer(username, payload) {
            const url = this.baseUrl + `streamers/${username}`;
            const streamer = await this.put(url, { dataJ: payload });
            return streamer;
        }

        /**
         * Deletes the streamer with the provided username.
         *
         * @memberof StreamerAPI
         * @param {String} username The username of the streamer.
         * @returns {Promise} Empty response.
         */
        async deleteStreamer(username) {
            const url = this.baseUrl + `streamers/${username}`;
            return await this.delete(url);
        }
    };

export default StreamerAPI;
