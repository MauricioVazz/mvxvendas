import styles from './Header.module.css'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5';

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">
                    <span className={styles.logo1}>M</span>
                    <span className={styles.logo2}>V</span>
                    <span className={styles.logo3}>X</span>
                </Link>
            </div>

            {/* Busca */}
            <div className={styles.searchBar}>
                <input type="text" placeholder="O que você está procurando?" />
                <div className={styles.location}>
                    <button className={styles.searchBtn}>
                        <IoSearch size={20}/>
                    </button>
                </div>
            </div>

            {/* Busca */}
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link href="/signin" className={styles.loginBtn}>
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.anunciarBtn}>
                            Anunciar gratis
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}