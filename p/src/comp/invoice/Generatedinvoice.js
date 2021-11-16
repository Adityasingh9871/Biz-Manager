import React from 'react'
import styles from './invoice.module.css'

export default function Generatedinvoice(props) {
    return (
        <div>
            <table border='0' className={styles.table}>

            
            <tr>
                <td className={styles.idtable}>{props.id}</td>
                <td>{props.pname}</td>
                <td>{props.price}</td>
                <td>{props.quantity}</td>
                <td>${props.amount}</td>
            </tr>
            </table>
            
        </div>
    )
}
