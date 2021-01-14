const app = require("..");

async function run() {
    await app.API.load();
    const api = new app.API();
    try {
        console.info(await api.info());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
