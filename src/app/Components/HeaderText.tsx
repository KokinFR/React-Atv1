'use client';
import styles from './styles/Header.module.css';


export const HeaderText = () => {
    return (
        <div className={styles.body} id={styles.linha}>
        <header className={styles.text}>
            <h1>React Activate!</h1>
        </header>
    </div>
    )
}