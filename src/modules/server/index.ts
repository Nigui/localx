import { handler } from "./app.ts";

export type ServerConfig = { endpoints: any[] };

const DEFAULT_PORT = 80;

let server: Deno.HttpServer;

function getServer() {
  if (!server) throw new Error("Server is not initialized");
  return server;
}

export function startServer(config: ServerConfig) {
  console.log("start server with config", config);

  server = Deno.serve({ port: DEFAULT_PORT }, handler);
}

export async function stopServer() {
  await getServer().shutdown();
}
