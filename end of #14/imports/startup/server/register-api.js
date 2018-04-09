import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";

import SrcPhotosSchema from "../../api/srcPhotos/SrcPhotos.graphql";
import SrcPhotosResolvers from "../../api/srcPhotos/resolvers";
//dsd
const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  SrcPhotos: [SrcPhotos]
  ComboPhotos: [SrcPhotos]
}
`;

const typeDefs = [testSchema, ResolutionsSchema, SrcPhotosSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(
  testResolvers,
  ResolutionsResolvers,
  SrcPhotosResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
