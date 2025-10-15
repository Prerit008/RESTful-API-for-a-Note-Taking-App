const app = require('./app');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 4000;
(async () => {
    try {
        await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/note_api_dev');
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (err) {
        console.error('Failed to start', err);
        process.exit(1);
    }
})();