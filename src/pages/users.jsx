import Head from 'next/head'
import NavBar from '../components/NavBar'
import UserTable from '../components/UserTable'
import styles from '../styles/UserTable.module.css'

export default function Users() {

  function filterUser() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Usuários</title>
      </Head>

      <NavBar />
      <div>
        <div>
          <input type="text" id="filter" className={styles.filter} onChange={filterUser} placeholder="Buscar Usuário.." title="Digite um nome" />
        </div>
        <div>
          <UserTable />
        </div>
      </div>
    </div>
  )
}