// @ts-nocheck

import { noCacheRequest } from "./Client";

const getBooksQuery = `{
    books {
        id
        name
        author
        tags
    }
}`;

export const getBooks = async () => {
    const response = await noCacheRequest(getBooksQuery);

    if (response.error) {
        console.log(response.error);
    }

    const { data } = await response.json();
    return data.books;
};
