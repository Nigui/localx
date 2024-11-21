import { loadConfig } from "../config/index.ts";
import type { Config } from "../config/types.ts";
import { handler, registerEndpoint } from "./app.ts";

let server: Deno.HttpServer | undefined;
let config: Config | undefined;

function getServer() {
  if (!server) throw new Error("Server is not initialized");
  return server;
}

export async function startServerFromPath(configPath: string) {
  await loadConfig(configPath).then(startServer);
}

export function startServer(_config: Config) {
  config = _config;
  const { endpoints, port } = config;
  endpoints.forEach(registerEndpoint);
  server = Deno.serve({ port }, handler);
}

export async function stopServer() {
  await getServer().shutdown();
}

export function isListening() {
  return !!server?.addr;
}

function getPort() {
  const { addr } = server ?? {};
  return addr && "port" in addr ? addr.port : config?.port;
}

function getHostname() {
  const { addr } = server ?? {};
  return addr && "hostname" in addr ? addr.hostname : addr?.path;
}

export function getServerInfos() {
  return {
    listening: isListening(),
    port: getPort(),
    address: getHostname(),
  };
}
