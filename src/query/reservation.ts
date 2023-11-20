// @ts-nocheck
import { noCacheRequest } from "./Client";

const getReaderReservationsQuery = (readerID: string): string => `{
    readerReservations(readerID: "${readerID}") {
        bookID
        readerID
        reservationEndDate
    }
}`;

export const getReaderReservations = async (readerID: string) => {
    const response = await noCacheRequest(getReaderReservationsQuery(readerID));
    if (response.status >= 300) {
        console.log(response.statusText);
    }

    const { data } = await response.json();
    return data;
};

const addBookReservationMutation = (readerID: string, bookID: string, date: string) => `mutation {
    addBookReservation(readerID: "${readerID}", bookID: "${bookID}", date: "${date}") {
        book {
            id
        }
        reader {
            id
        }
        reservationEndDate
    }
}`;

export const addBookReservation = async (readerID: string, bookID: string, date: string) => {
    const response = await noCacheRequest(addBookReservationMutation(readerID, bookID, date));
    if (response.status >= 300) {
        console.log(response.statusText);
    }

    const { data } = await response.json();
    return data;
};
