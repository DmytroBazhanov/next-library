import { HEADER_LINKS } from "./config";

import Image from "next/image";
import BookImg from "../../../public/book.png";
import Link from "next/link";

import "./header.css";

export default function Header() {
    const linksObject = Object.keys(HEADER_LINKS);

    return (
        <header className="application-header">
            <div className="application-header_left">
                <Image className="header_logo" src={BookImg} alt="logo" priority />
            </div>

            <div className="application-header_right">
                {linksObject.map((key) => (
                    <Link className="header_link" href={HEADER_LINKS[key]} key={key}>
                        {key}
                    </Link>
                ))}
            </div>
        </header>
    );
}
