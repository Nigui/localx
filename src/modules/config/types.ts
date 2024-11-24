import type { z } from "zod";
import type { schemas } from "./schemas.ts";

export type EndpointConfig = z.infer<typeof schemas.endpointConfig>;
export type ConfigFile = z.infer<typeof schemas.configFile>;
