import React from 'react'
import users from '../../data.json'
import styles from '../styles/UserTable.module.css'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'

export default function UserTable() {
    const DisplayData = users.map(
        (user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.age}</td>
                    <td className={styles.buttonCell}>
                        <Link href={"/users/" + user.id}>
                            <button type='button' className={styles.editButton} title="Editar">
                                <FiEdit size={22} />
                            </button>
                        </Link>
                    </td>
                </tr>
            )
        }
    )

    return (
        <div className={styles.users}>
            <div className={styles.usersList}>
                <table id="table" className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

