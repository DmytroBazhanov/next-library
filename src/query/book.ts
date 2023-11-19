// @ts-nocheck
import { graphQLClient } from "./Client";

const getBooksQuery = `{
    books {
        id
        name
        author
        tags
    }
}`;

export const getBooks = async () => {
    // const response = await graphQLClient.query(getBooksQuery).toPromise();
    const response = await graphQLClient.query(getBooksQuery).toPromise();
    if (response.error) {
        console.log(response.error);
    }

    return response.data.books;
}