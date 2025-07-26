const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../../config/env');
const logger = require('../../shared/logger');

const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

app.use(
  '/api',
  createProxyMiddleware({
    target: config.backend.url,
    changeOrigin: true,
    pathRewrite: { '^/api': '/api' },
    timeout: 5000,
    proxyTimeout: 5000,
    onError: (err, req, res) => {
      logger.error('Proxy error', { err: err.message });
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Bad gateway', details: err.message }));
    },
  })
);

const port = config.frontend.port;
app.listen(port, () => logger.info(`Frontend listening on port ${port}`, { port }));
