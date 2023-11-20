// @ts-nocheck

import { Client, cacheExchange, fetchExchange } from "urql";

export const graphQLClient = new Client({
    url: "http://localhost:8000/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
        headers: {
            "cache": "no-store",
        },
    },
});

export const noCacheRequest = (query: string) =>
    fetch("http://localhost:8000/graphql", {
        url: "http://localhost:8000/graphql",
        method: "POST",
        cache: "no-store",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: {},
        }),
    });
