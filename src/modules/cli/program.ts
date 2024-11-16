import { Command } from "@cliffy/command";
import start from "./commands/start.ts";
import main from "./commands/index.ts";

const VERSION = "0.0.0";

export const program = new Command()
  .name("localx")
  .description("CLI to start local backend")
  .version(VERSION)
  .action(main)
  .command(start.name, start.command);
