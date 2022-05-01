import "reflect-metadata";
import { gql, ApolloServer } from "apollo-server-lambda";
import { buildSchemaSync } from "type-graphql";
import { RecipeResolver } from "./recipe-resolver";

const IS_LOCAL = !!process.env.IS_LOCAL;

const schema = buildSchemaSync({
  resolvers: [RecipeResolver],
});

const server = new ApolloServer({
  schema,
  introspection: true,
});

export const handler = server.createHandler();
