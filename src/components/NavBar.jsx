import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <h1>Plataforma Oceano</h1>

            <ul className={styles.ul}>
                <Link href="/">
                    <li className={styles.li}><a className={styles.a} href="">Início</a></li>
                </Link>
                <Link href="/users">
                    <li className={styles.li}><a className={styles.a} href="">Usuários</a></li>
                </Link>
            </ul>
        </div>
    )
}