import { Hono } from "hono";
import type { EndpointConfig } from "../config/types.ts";

const app = new Hono();

export function registerEndpoint(config: EndpointConfig) {
  app.on(
    config.method,
    [config.path],
    (response) => response.text(config.response),
  );
}

export const handler = app.fetch;
