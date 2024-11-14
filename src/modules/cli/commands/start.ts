import { Command } from "@cliffy/command";
import { keypress } from "@cliffy/keypress";
import { loadConfig } from "../../config/index.ts";
import { startServer, stopServer } from "../../server/index.ts";

const command = new Command()
  .description("Run local backend")
  .option("-c, --config <string>", "path to configuration file", {
    default: "./config.localx",
  })
  .action(async ({ config: configFile }) => {
    const config = loadConfig(configFile);
    startServer(config);

    console.log("Press any key to quit.");

    await keypress();

    console.log("stopping server...");
    await stopServer();
    console.log("👋 Good bye.");
  });

export default {
  name: "start",
  command,
};
