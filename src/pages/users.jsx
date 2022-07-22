import Head from 'next/head'
import NavBar from '../components/NavBar'
import UserTable from '../components/UserTable'

export default function Users() {
  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>
      <div>
        <NavBar />
        
        <UserTable />
      </div>
    </div>
  )
}