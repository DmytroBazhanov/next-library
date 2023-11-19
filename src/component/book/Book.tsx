import { IBook } from "./config";

import "./book.css";

export default function Book({ id, author, text, name, tags }: IBook) {
    return (
        <div className="book" key={id} data-tags={tags}>
            <div className="book_image-placeholder"></div>
            <div className="book_description">
                <h4 className="book_name">{name}</h4>
                <p className="book_author">{author}</p>

                <button className="book_reserve-book">Reserve this book</button>
            </div>
        </div>
    );
}
