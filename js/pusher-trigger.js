export const PusherTriggerAPI = superclass =>
    class extends superclass {
        async pusherTrigger(channel, event, payload) {
            const url = this.baseUrl + "pusher_trigger";
            const response = await this.post(url, {
                dataJ: { channel: channel, event: event, payload: payload }
            });
            return response;
        }
    };

export default PusherTriggerAPI;
