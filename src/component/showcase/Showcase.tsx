import { Book } from "..";
import { IBook } from "../book/config";
import { IReservationRecord } from "./config";

import "./showcase.css";

export default function Showcase({
    books,
    reservations,
}: {
    books: IBook[];
    reservations: IReservationRecord[];
}) {
    return (
        <div className="showcase-container">
            {books.map((book) => {
                const isReserved = reservations.findIndex((record) => record.bookID === book.id);
                return <Book key={book.id} isReserved={!(isReserved === -1)} {...book} />;
            })}
        </div>
    );
}
