import type { ActionHandler } from "@cliffy/command";
import { Select } from "@cliffy/prompt";
import { intro } from "../helpers/print.ts";
import {
  getServerInfos,
  isListening,
  startServerFromPath,
  stopServer,
} from "../../server/index.ts";
import { logger } from "../helpers/print.ts";
import { clearScreen, newLine } from "../helpers/tty.ts";
import { pressAnyKey } from "../helpers/prompt.ts";
import { CONFIG_FILE_PATH_DEFAULT } from "../../config/constants.ts";

const { print } = logger;

async function showMenu() {
  const serverStarted = isListening();

  const action = await Select.prompt({
    message: "What do you want to do:",
    options: [
      { name: "Start server", value: "start", disabled: serverStarted },
      { name: "Stop server", value: "stop", disabled: !serverStarted },
      { name: "Restart server", value: "restart", disabled: !serverStarted },
      { name: "Get infos", value: "info" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "start":
      await startServerFromPath(CONFIG_FILE_PATH_DEFAULT);
      break;
    case "stop":
      await stopServer();
      break;
    case "info": {
      const { listening, port, address } = getServerInfos();

      newLine();
      print(`Your server is:`);
      listening
        ? print("listening", { color: "success", prefix: "🟢" })
        : print("stopped", { color: "error", prefix: "🔴" });
      port && print(["port:", port]);
      address && print(["address:", address]);
      newLine();
      break;
    }
    case "quit":
      Deno.exit();
  }

  await pressAnyKey();

  clearScreen();

  return showMenu();
}

const main: ActionHandler = async () => {
  clearScreen();

  intro();

  await showMenu();
};

export default main;
