// @ts-nocheck

const getBooksQuery = `{
    books {
        id
        name
        author
        tags
    }
}`;

export const getBooks = async () => {
    const response = await fetch("http://localhost:8000/graphql", {
        url: "http://localhost:8000/graphql",
        method: "POST",
        next: { revalidate: 1 },
        headers: {
            "content-type": "application/json",

        },
        body: JSON.stringify({
            query: getBooksQuery,
            variables: {},
        }),
    });

    if (response.error) {
        console.log(response.error);
    }

    const { data } = await response.json();
    return data.books;
};
