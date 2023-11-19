import { Book } from "..";
import { IBook } from "../book/config";

import "./showcase.css";

export default function Showcase({ books }: { books: IBook[] }) {
    return (
        <div className="showcase-container">
            {books.map((book) => (
                <Book key={book.id} {...book} />
            ))}
        </div>
    );
}
