import { keypress } from "@cliffy/keypress";
import { logger } from "./print.ts";

const { info, error, warn } = logger;

export async function pressAnyKey() {
  info("Press any key to quit.");
  await keypress();
}

export async function promptOptions() {
  info("Press key to continue... [Q]uit [C]lose");
  const { key } = await keypress();
  switch (key) {
    case "Q":
      error("Quit");
      break;
    case "C":
      warn("Close");
      break;
    default:
      break;
  }
}
