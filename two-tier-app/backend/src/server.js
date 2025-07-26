const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const config = require('../../config/env');
const logger = require('../../shared/logger');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api', routes);

const port = config.backend.port;
app.listen(port, () => {
  logger.info(`Backend listening on port ${port}`, { port });
});
