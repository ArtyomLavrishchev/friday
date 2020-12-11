import React from "react"
import {NavLink} from "react-router-dom"
import styles from './DevHeader.module.css'
import {PATH} from "../Routes";

export const DevHeader: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <NavLink to={PATH.Registration} activeClassName={styles.active}>Registration</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.Login} activeClassName={styles.active}>Login</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.Profile} activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.RecoveryPassword} activeClassName={styles.active}>Recovery Password</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.NewPassword} activeClassName={styles.active}>NewPassword</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.Test} activeClassName={styles.active}>Test</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={PATH.Error404} activeClassName={styles.active}>Error404</NavLink>
            </div>
        </div>
    )
}

