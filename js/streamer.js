export const StreamerAPI = superclass =>
    class extends superclass {
        async listStreamers(options = {}) {
            const url = this.baseUrl + "streamers";
            const contents = await this.get(url, options);
            return contents;
        }

        async createStreamer(payload) {
            const url = this.baseUrl + "streamers";
            const streamer = await this.post(url, { dataJ: payload });
            return streamer;
        }

        async getStreamer(username) {
            const url = this.baseUrl + `streamers/${username}`;
            const streamer = await this.get(url);
            return streamer;
        }

        async updateStreamer(username, payload) {
            const url = this.baseUrl + `streamers/${username}`;
            const streamer = await this.put(url, { dataJ: payload });
            return streamer;
        }

        async deleteStreamer(username) {
            const url = this.baseUrl + `streamers/${username}`;
            const streamer = await this.delete(url);
            return streamer;
        }
    };

export default StreamerAPI;
