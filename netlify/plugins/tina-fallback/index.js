// netlify/plugins/tina-fallback/index.js
const tinaFallback = require("../../../scripts/tina-fallback");

module.exports = {
  onPreBuild: () => tinaFallback()
};
