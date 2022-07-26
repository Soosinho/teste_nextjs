import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { BiListUl } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <NavBar />

      <div className={styles.page}>
        <section className={styles.menu}>
          <div className={styles.text}>
            <h2>Teste Frontend</h2>
            <h2>Next.js</h2>
          </div>
          <div>
            <Link href="/users">
              <button className={styles.bttn} title="Listar Usuários"><BiListUl type='regular' size={26} className={styles.icon}/> Listar Usuários</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
