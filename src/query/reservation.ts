// @ts-nocheck
import { graphQLClient } from "./Client";

const getReaderReservationsQuery = (readerID: String) => `{
    readerReservations(readerID: "${readerID}") {
        bookID
        readerID
        reservationEndDate
    }
}`;

export const getReaderReservations = async (readerID: string) => {
    const response = await graphQLClient
        .query(getReaderReservationsQuery(readerID), null, {
            context: {
                headers: {
                    key: "Cache-Control",
                    value: "no-store",
                },
            },
        })
        .toPromise();
    if (response.error) {
        console.log(response.error);
    }

    console.log(response.data);
    // return response.data;
};
