import { Header, Showcase } from "@/component";
import { getBooks } from "@/query/book";
import { getReaderReservations } from "@/query/reservation";

export default async function Home() {
    const books = await getBooks();
    const res = await getReaderReservations("c3bae8b2-74ea-11ee-b962-0242ac120002");

    return (
        <div className="application-container">
            <Header />
            <main className="main">
                <Showcase books={books} />
            </main>
        </div>
    );
}
