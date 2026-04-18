import Link from "next/link";
import css from "./Header.module.css"
import Image from "next/image";

export function Header() {
    return (
        <header className={css.header}>
            <Link href='/' className={css.logoLink}>
                <Image src="/logo.svg" alt="TravelTrucks" width={136} height={16} priority />
            </Link>
            <nav className={css.nav}>
                <Link href="/" className={css.link}>Home</Link>
                <Link href="/catalog" className={css.link}>Catalog</Link>
            </nav>
        </header>
    )
};
