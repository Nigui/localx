import { program } from "./program.ts";

export function runCLI() {
  program.parse(Deno.args);
}
