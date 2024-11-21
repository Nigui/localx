export type Endpoint = {
  method: string;
  path: string;
  response: string;
};

export type Config = { port: number; endpoints: Endpoint[] };
