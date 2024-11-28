import { schemas } from "./schemas.ts";
import type { ConfigFile } from "./types.ts";

export async function validate(config: unknown): Promise<ConfigFile> {
  const { success, data, error } = await schemas.configFile.safeParseAsync(
    config,
  );
  if (success) return data as ConfigFile;
  if (error) throw error;
  else throw new Error("unknown validation error");
}
