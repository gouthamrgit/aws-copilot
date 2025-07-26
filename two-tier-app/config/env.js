module.exports = {
  env: process.env.NODE_ENV || 'development',
  frontend: {
    port: parseInt(process.env.PORT || '3000', 10),
  },
  backend: {
    port: parseInt(process.env.BACKEND_PORT || '8080', 10),
    url:
      process.env.BACKEND_URL ||
      `http://backend.${process.env.COPILOT_SERVICE_DISCOVERY_ENDPOINT || 'local'}:8080`,
  },
};
