import users from '../../../data.json'
import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'
import styles from '../../styles/User.module.css'
import Link from 'next/link'
import { FaUserEdit } from 'react-icons/fa'

export default function User() {
    const router = useRouter()
    const userId = router.query.user

    let name, phone

    loadUser()

    function loadUser() {
        users.find(
            (user) => {
                if (userId == user.id) {
                    name = user.name
                    phone = user.phone
                }
            }
        )
    }

    function updateUser() {
        const user = users.find((x) => x.id.toString() === userId.toString())
        user.name = document.getElementById("name").value
        user.phone = document.getElementById("phone").value
    }

    return (
        <div>
            <NavBar />
            <div className={styles.page}>
                <form className={styles.form}>
                <i className={styles.icon}><FaUserEdit type='logo' size={50}/></i>
                    <div className={styles.name}>
                        <label className={styles.label}>Nome</label>
                        <input type="text" id="name" className={styles.input} defaultValue={name} />
                    </div>
                    <div className={styles.phone}>
                        <label className={styles.label}>Telefone</label>
                        <input type="text" id="phone" className={styles.input} defaultValue={phone} />
                    </div>
                    <Link href="/users">
                        <button type='button' onClick={updateUser} className={styles.button}>Alterar</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}