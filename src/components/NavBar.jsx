import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import { BiHomeAlt } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <h1>Plataforma Oceano</h1>

            <ul className={styles.ul}>
                <Link href="/">
                    <button className={styles.bttn}><BiHomeAlt type='regular' size={18} className={styles.icon}/> Início</button>
                </Link>
                <Link href="/users">
                    <button className={styles.bttn}><HiOutlineUserGroup type='regular' size={18} className={styles.icon}/> Usuários</button>
                </Link>
            </ul>
        </div>
    )
}