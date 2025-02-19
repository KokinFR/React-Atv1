'use client'
import styles from './styles/Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.body}>
            <footer className={styles.footer}>
                <p className={styles.text}>Desenvolvido por: <a href="https://github.com/KokinFR/React-Atv1.git" className={styles.link}>Francisco Rafael</a></p>
            </footer>
        </div>
    )
}