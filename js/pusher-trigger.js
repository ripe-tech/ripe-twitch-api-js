export const PusherTriggerAPI = superclass =>
    class extends superclass {
        async pusherTrigger(payload) {
            const url = this.baseUrl + "pusher_trigger";
            const response = await this.post(url, { dataJ: payload });
            return response;
        }
    };

export default PusherTriggerAPI;
