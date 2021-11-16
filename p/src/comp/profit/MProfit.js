import React from 'react'
import styles from './profit.module.css'
import moment from 'moment'

function MProfit(props) {
   
    return (
        <div>      
            
            <div className={styles.box1}>
                <div className={styles.box2}>{props.month}</div>
                <div className={styles.flex2}>
                <div className={styles.box3}>$ {props.avg}</div>
                </div>

            </div>
            
            
            
        </div>
    )
}

export default MProfit
