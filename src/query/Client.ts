// @ts-nocheck

import { Client, cacheExchange, fetchExchange } from "urql";

export const graphQLClient = new Client({
    url: "http://localhost:8000/graphql",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
        headers: {
            "Cache-Control": "no-store",
        },
    },
});

export const noCacheRequest = (query: string) =>
    fetch("http://localhost:8000/graphql", {
        url: "http://localhost:8000/graphql",
        method: "POST",
        next: { revalidate: 1 },
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: {},
        }),
    });
