import { Hono } from "npm:hono";

const app = new Hono();

app.get("/", (response) => response.text("Hello world"));

export const handler = app.fetch;
