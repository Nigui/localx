import type { ActionHandler } from "@cliffy/command";
import { Select } from "@cliffy/prompt";
import { intro } from "../helpers/print.ts";
import { getServerInfos, startServer, stopServer } from "../../server/index.ts";
import { logger } from "../helpers/print.ts";
import { clearScreen } from "../helpers/tty.ts";
import { pressAnyKey } from "../helpers/prompt.ts";

const { info } = logger;

async function showMenu() {
  const action = await Select.prompt({
    message: "What do you want to do:",
    options: [
      { name: "Start server", value: "start" },
      { name: "Stop server", value: "stop", disabled: true },
      { name: "Restart server", value: "restart" },
      { name: "Get infos", value: "info" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "start":
      await startServer({} as any); // TODO:
      break;
    case "stop":
      await stopServer();
      break;
    case "info": {
      const serverInfo = getServerInfos();
      info(`Your server is: \n${JSON.stringify(serverInfo)}`);
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
