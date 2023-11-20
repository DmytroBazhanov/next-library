// @ts-nocheck
import { graphQLClient, noCacheRequest } from "./Client";

const getReaderReservationsQuery = (readerID: string): string => `{
    readerReservations(readerID: "${readerID}") {
        bookID
        readerID
        reservationEndDate
    }
}`;

export const getReaderReservations = async (readerID: string) => {
    const response = await noCacheRequest(getReaderReservationsQuery(readerID));
    if (response.error) {
        console.log(response.error);
    }

    return response.data;
};
