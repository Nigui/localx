import { CONFIG_FILE_PATH_DEFAULT, DEFAULT_SERVER_PORT } from "./constants.ts";
import type { ConfigFile } from "./types.ts";
import { validate } from "./validation.ts";

export async function loadConfig(
  filePath: string = CONFIG_FILE_PATH_DEFAULT
): Promise<Required<ConfigFile>> {
  const path = await Deno.realPath(filePath);

  const content = await Deno.readTextFile(path);

  const file = await import(`data:text/javascript,${content}`).then(validate);

  return {
    port: file.port || DEFAULT_SERVER_PORT,
    endpoints: file.endpoints || [],
  };
}
