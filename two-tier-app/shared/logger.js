const levels = { info: 'INFO', warn: 'WARN', error: 'ERROR' };
function log(level, msg, meta = {}) {
  const time = new Date().toISOString();
  console.log(JSON.stringify({ time, level, msg, ...meta }));
}
module.exports = {
  info: (msg, meta) => log(levels.info, msg, meta),
  warn: (msg, meta) => log(levels.warn, msg, meta),
  error: (msg, meta) => log(levels.error, msg, meta),
};
