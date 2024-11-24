import { z } from "zod";

const endpointConfig = z.object({
  method: z.string(),
  path: z.string(),
  response: z.string(),
});
const configFile = z
  .object({
    port: z.number(),
    endpoints: endpointConfig.array(),
  })
  .partial();

export const schemas = {
  endpointConfig,
  configFile,
};
