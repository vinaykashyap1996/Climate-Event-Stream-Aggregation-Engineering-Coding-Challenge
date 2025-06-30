import { gql } from "apollo-server-express";

export const candlestickTypeDefs = gql`
  type Candlestick {
    city: String!
    hour: String!
    open: Float!
    close: Float!
    min: Float!
    max: Float!
  }
  type Query {
    candlesticks(city: String!, from: String, to: String): [Candlestick!]!
  }
`;