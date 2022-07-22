import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <NavBar />

      <div className={styles.page}>
        <section className={styles.menu}>
          <h2>Teste Frontend</h2>
          <h3>Next.js</h3>
          <div>
            <button>Listar Usuários</button>
          </div>
        </section>
      </div>
    </div>
  )
}
