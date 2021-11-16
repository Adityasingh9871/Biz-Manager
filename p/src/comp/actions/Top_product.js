import React from 'react'
import styles from './action.module.css'

export default function Top_product(props) {
    return (
        <div>
            <div>
                <li className={styles.top}>{props.pname}</li>
            </div>


        </div>
    )
}
