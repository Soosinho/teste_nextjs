import users from '../../../data.json'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import styles from '../../styles/User.module.css'
import Link from 'next/link'
import { FaUserEdit } from 'react-icons/fa'
import Head from 'next/head'

export default function User() {
    const router = useRouter()
    const userId = router.query.user

    let name, phone, age

    loadUser()

    function loadUser() {
        users.find(
            (user) => {
                if (userId == user.id) {
                    name = user.name
                    phone = user.phone
                    age = user.age
                }
            }
        )
    }

    function updateUser() {
        const user = users.find((x) => x.id.toString() === userId.toString())
        user.name = document.getElementById("name").value
        user.phone = document.getElementById("phone").value
        user.age = document.getElementById("age").value
    }

    return (
        <div>
            <Head>
                <title>Editar Usuário</title>
            </Head>
            <NavBar />
            <div className={styles.page}>
                <form className={styles.form}>
                <i className={styles.icon}><FaUserEdit type='logo' size={50}/></i>
                    <div className={styles.name}>
                        <label className={styles.label}>Nome:</label>
                        <input type="text" id="name" title='Alterar Nome' className={styles.input} defaultValue={name} />
                    </div>
                    <div className={styles.phone}>
                        <label className={styles.label}>Telefone:</label>
                        <input type="text" id="phone" title='Alterar Telefone' className={styles.input} defaultValue={phone} />
                    </div>
                    <div className={styles.age}>
                        <label className={styles.label}>Idade:</label>
                        <input type="text" id="age" title='Alterar Idade' className={styles.input} defaultValue={age} />
                    </div>
                    <Link href="/users">
                        <button type='button' title='Aplicar alterações' onClick={updateUser} className={styles.button}>Aplicar</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}