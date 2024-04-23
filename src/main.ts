import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Cv, Query} from "./resolvers";

import { readFileSync } from "fs";
import { join } from "path";
import { context } from "./context";

// reading the schema from the schema.graphql file

export const schema = createSchema({
  typeDefs: readFileSync(
    join(__dirname, "schema/schema.graphql"),
    "utf-8"
  ),
  resolvers: {
    Cv,
    Query
  },
});

const yoga = createYoga({ schema, context });

const server = createServer(yoga);
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
