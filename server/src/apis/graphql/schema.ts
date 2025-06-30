import { candlestickTypeDefs } from "../../business/candlestick/graphql/typeDefs";
import { candlestickResolvers } from "../../business/candlestick/graphql/resolvers";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
    typeDefs: [candlestickTypeDefs],
    resolvers: [candlestickResolvers]
});