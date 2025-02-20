"use client";
import styles from './styles/Button.module.css';

export const ButtonTest = () => {
    
    function Hello() {
        alert("Ativação do Botão");
    }
    
    return (
        <div className={styles.body}>
            <p className={styles.p}>Clique para ativar o Botão</p>
            <button className={styles.button} onClick={Hello}>Click me!</button>
        </div>
    )
}