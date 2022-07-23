import React from 'react'
import users from './data.json'
import styles from '../styles/UserTable.module.css'

export default function UserTable() {
    const DisplayData = users.map(
        (user) => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        }
    )

    return (
        <div className={styles.usersList}>
            <div className={styles.users}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nome</th>
                            <th>telefone</th>
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

