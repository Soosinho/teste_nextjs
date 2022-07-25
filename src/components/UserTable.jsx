import React from 'react'
import users from '../../data.json'
import styles from '../styles/UserTable.module.css'
import Link from 'next/link'
import { BiEdit } from 'react-icons/bi'

export default function UserTable() {
    const DisplayData = users.map(
        (user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td className={styles.buttonCell}>
                        <Link href={"/users/" + user.id}>
                            <button type='button' className={styles.editButton}>
                                <BiEdit size={20} />
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

