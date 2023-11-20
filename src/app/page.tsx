import { Header, Showcase } from "@/component";
import { getBooks } from "@/query/book";
import { getReaderReservations } from "@/query/reservation";

const EXAMPLE_CURRENT_USER_ID = "5b6de44c-758c-11ee-b962-0242ac120002"; // Change it if your db have no reader with such id

export default async function Home() {
    const books = await getBooks();
    const res = await getReaderReservations(EXAMPLE_CURRENT_USER_ID);

    return (
        <div className="application-container">
            <Header />
            <main className="main">
                <Showcase books={books} />
            </main>
        </div>
    );
}
