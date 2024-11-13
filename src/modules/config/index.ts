import { ServerConfig } from "../server/index.ts";

export function loadConfig(filePath?: string): ServerConfig {
  console.log("load config file", filePath);
  return {
    endpoints: [],
  };
}
