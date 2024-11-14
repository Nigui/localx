import { Command } from "@cliffy/command";
import start from "./commands/start.ts";

const VERSION = "0.0.0";

export const program = new Command()
  .name("localx")
  .description("CLI to start local backend")
  .version(VERSION)
  .command(start.name, start.command);
