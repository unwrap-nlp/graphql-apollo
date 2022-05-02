import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { RecipeResolver } from "./recipe-resolver";
import path from "path";

const IS_LOCAL = !!process.env.IS_LOCAL;

const schema = buildSchemaSync({
  resolvers: [RecipeResolver],
  emitSchemaFile: path.resolve(__dirname, "schema.gql"),
});

const server = new ApolloServer({
  schema,
  introspection: true,
});

export const handler = server.createHandler();
