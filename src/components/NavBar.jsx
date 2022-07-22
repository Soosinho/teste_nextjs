import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <h1>Plataforma Oceano</h1>

            <ul className={styles.ul}>   
                <li className={styles.li}><a className={styles.a} href="">Início</a></li>
                <li className={styles.li}><a className={styles.a} href="">Usuários</a></li>
            </ul>
        </div>
    )
}