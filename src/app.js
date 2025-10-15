require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const notesRoutes = require('./routes/notes.routes');
const errorHandler = require('./middleware/errorHandler');
const Home = require('./index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);
app.get('/', Home.home);
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(errorHandler);
module.exports = app;