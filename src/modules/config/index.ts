import { CONFIG_FILE_PATH_DEFAULT, DEFAULT_SERVER_PORT } from "./constants.ts";
import type { Config } from "./types.ts";

export async function loadConfig(
  filePath: string = CONFIG_FILE_PATH_DEFAULT
): Promise<Config> {
  const path = await Deno.realPath(filePath);

  const content = await Deno.readTextFile(path);

  const file = await import(`data:text/javascript,${content}`);

  return {
    port: file.port || DEFAULT_SERVER_PORT,
    endpoints: file.endpoints || [],
  };
}
