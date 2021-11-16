import React, { useState, useContext, useEffect } from 'react'
import styles from './header.module.css'




  
export default function Header(props) {
    

    const signout = () => {
        localStorage.setItem('isloggedin','false')
        localStorage.setItem('user','null')
        props.setloginstat(false)
    }



    if (props.loginstat === 'true') {
        var logout = <button className={styles.signout} onClick={() => signout()}>Logout</button>
    }



 
    

    return (
        <div className={styles.desktopview}>
            <div className={styles.header}>
                <div className={styles.tag} >BIZ MANAGER</div>
                {logout}
            </div>
            

            

        </div>
    )
}
