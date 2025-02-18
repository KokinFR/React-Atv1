import styles from './styles/Home.module.css';

import { ButtonTest } from "./Components/ButtonTest";
import { Footer } from "./Components/Footer";
import { HeaderText } from "./Components/HeaderText";


export default function Home() {
  return (
    <>
    <div className={styles.container}> {/* Aplicando a classe */}
      <HeaderText />

      <ButtonTest />

      <Footer />
    </div>
    </>
  );
}
