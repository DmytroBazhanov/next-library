import { Client, cacheExchange, fetchExchange } from "urql";

export const graphQLClient = new Client({
    url: "http://localhost:8000/graphql",
    exchanges: [cacheExchange, fetchExchange],
});
