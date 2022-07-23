import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
            <h3>Next.js</h3>
          </div>
          <div>
            <Link href="/users">
              <li className={styles.li}><a className={styles.a} href="">Listar Usuários</a></li>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
