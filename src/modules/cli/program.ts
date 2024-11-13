import { Command } from "npm:commander";
import { startCommand } from "./start.ts";

const VERSION = "0.0.0";

export const program = new Command()
  .name("localx")
  .description("CLI to start local backend")
  .version(VERSION)
  .addCommand(startCommand);
