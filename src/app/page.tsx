import { Header, Showcase } from "@/component";
import { getBooks } from "@/query/book";

export default async function Home() {
    const books = await getBooks();

    return (
        <div className="application-container">
            <Header />
            <main className="main">
                <Showcase books={books} />
            </main>
        </div>
    );
}
