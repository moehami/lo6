#netlify/plugins/tina-fallback/
const fs = require("fs");
const { execSync } = require("child_process");

const tinaGeneratedPath = ".tina/__generated__";

// ANSI colors
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
  bold: "\x1b[1m"
};

function log(color, msg) {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function runTina(local = false) {
  if (local) {
    log("yellow", "⚠️  Missing Tina Cloud credentials. Using LOCAL mode...");
    process.env.NEXT_PUBLIC_TINA_CLIENT_ID = "";
    process.env.TINA_TOKEN = "";
  } else {
    log("cyan", "🌐 Running TinaCMS build in CLOUD mode...");
  }

  try {
    execSync("yarn tinabuild", { stdio: "inherit" });
    log("green", `✅ TinaCMS build completed in ${local ? "LOCAL" : "CLOUD"} mode.`);
  } catch (err) {
    log("red", `❌ TinaCMS ${local ? "LOCAL" : "CLOUD"} build failed.`);
    process.exit(1);
  }
}

module.exports = {
  onPreBuild: () => {
    const hasGenerated = fs.existsSync(tinaGeneratedPath);
    const hasEnvVars = process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN;

    if (!hasGenerated || !hasEnvVars) {
      runTina(!hasEnvVars);
    } else {
      log("green", "✅ TinaCMS generated files found and env vars set. Skipping Tina build.");
    }
  }
};
