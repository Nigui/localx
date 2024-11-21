import { logger } from "../helpers/print.ts";

export function exit() {
  logger.success("👋 Thank you for using. Bye.");
  Deno.exit();
}
