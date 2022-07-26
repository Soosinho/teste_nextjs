import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import { BiHomeAlt } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import Head from 'next/head'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export default function NavBar() {
    return (
        <div>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mukta&family=Rubik&family=Nunito&display=swap" rel="stylesheet"/>
        </Head>
        <div className={styles.navBar}>
            <h1 className={styles.h1}>Plataforma Oceano</h1>

            <ul className={styles.ul}>
                <Link href="/">
                    <button className={styles.bttn} title="Página Inicial"><BiHomeAlt type='regular' size={18} className={styles.icon}/> Início</button>
                </Link>
                <Link href="/users">
                    <button className={styles.bttn} title="Página de Usuários"><FiUsers type='regular' size={18} className={styles.icon}/> Usuários</button>
                </Link>
            </ul>
            <div className={styles.logos}>
                <IoLogoJavascript size={32} /> 
                <FaReact size={32} style={{"marginInline":"6px"}}/>
                <SiNextdotjs size={32}/>
            </div>
        </div>
    </div>
    )
}