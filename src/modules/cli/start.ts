import { createCommand } from "npm:commander";
import { loadConfig } from "../config/index.ts";
import { startServer } from "../server/index.ts";

export const startCommand = createCommand("start")
  .description("Run local backend")
  .option(
    "-c, --config <string>",
    "path to configuration file",
    "./config.localx"
  )
  .action(({ config: configFile }) => {
    const config = loadConfig(configFile);
    startServer(config);
  });
