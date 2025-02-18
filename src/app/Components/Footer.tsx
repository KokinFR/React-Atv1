'use client'
import styles from './styles/Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <p className={styles.text}>Desenvolvido por: <a href="https://github.com/KokinFR/React-Atv1.git" className={styles.link}>Francisco Rafael</a></p>
        </footer>
    )
}