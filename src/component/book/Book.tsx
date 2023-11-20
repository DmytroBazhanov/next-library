"use client";

import { useState } from "react";
import { IBook } from "./config";
import { EXAMPLE_CURRENT_USER_ID } from "@/app/page";
import { addBookReservation } from "@/query/reservation";

import "./book.css";

const ONE_WEEK_TIME = 600800000;

export default function Book({ id, author, text, name, tags, isReserved = false }: IBook) {
    const [reservationStatusChanged, setStatusChange] = useState<boolean>(false);

    const reservationStatus = isReserved || reservationStatusChanged; // if true -> book is reserved

    const handleReservation = () => {
        if (reservationStatus) return;
        const currentDate = String(Date.now() + ONE_WEEK_TIME);

        addBookReservation(EXAMPLE_CURRENT_USER_ID, id, currentDate).then(() => {
            setStatusChange(true);
        });
    };


    return (
        <div className="book" key={id} data-tags={tags}>
            <div className="book_image-placeholder"></div>
            <div className="book_description">
                <h4 className="book_name">{name}</h4>
                <p className="book_author">{author}</p>

                <button
                    className={`book_reserve-book${reservationStatus ? "__reserved" : ""}`}
                    onClick={handleReservation}
                    disabled={reservationStatus}
                >
                    {reservationStatus ? "Book already reserved" : "Reserve this book"}
                </button>
            </div>
        </div>
    );
}
