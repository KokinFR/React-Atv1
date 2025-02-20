'use client'
import styles from './styles/Footer.module.css';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className={styles.body}>
            <footer className={styles.footer}>
                <a href="https://github.com/KokinFR/React-Atv1.git" target='_blank'>
                    <Image src="/github-logo.png" alt="GitHub" width={40} height={40} />
                </a>
                <p className={styles.text}>2025</p>
            </footer>
        </div>
    )
}