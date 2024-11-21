import { Command } from "@cliffy/command";
import { startServerFromPath } from "../../server/index.ts";
import { pressAnyKey } from "../helpers/prompt.ts";
import { exit } from "../helpers/exit.ts";
import { CONFIG_FILE_PATH_DEFAULT } from "../../config/constants.ts";

const command = new Command()
  .description("Run local backend")
  .option("-c, --config <string>", "path to configuration file", {
    default: CONFIG_FILE_PATH_DEFAULT,
  })
  .action(async ({ config: configFile }) => {
    await startServerFromPath(configFile);

    await pressAnyKey();

    exit();
  });

export default {
  name: "start",
  command,
};
