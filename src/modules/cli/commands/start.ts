import { Command } from "@cliffy/command";
import { loadConfig } from "../../config/index.ts";
import { startServer } from "../../server/index.ts";
import { logger } from "../helpers/print.ts";
import { pressAnyKey } from "../helpers/prompt.ts";

const { success } = logger;

const command = new Command()
  .description("Run local backend")
  .option("-c, --config <string>", "path to configuration file", {
    default: "./config.localx",
  })
  .action(async ({ config: configFile }) => {
    const config = loadConfig(configFile);
    startServer(config);

    await pressAnyKey();

    success("👋 Good bye.");
  });

export default {
  name: "start",
  command,
};
