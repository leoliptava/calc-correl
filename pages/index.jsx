import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.headLine}>

      <h1>Seja Bem-Vindo</h1>
      <h2>Escolha duas ações</h2>

      <form action="#">
        <div className={styles.inputs}>
          <input type="text" name="stock-one" id="stock-one" placeholder="Ex: PETR3"/>
          <input type="text" name="stock-two" id="stock-two" placeholder="Ex: PETR4"/>
        </div>

        <div className={styles.buttons}>
          <Button href="/dashboard" text="BUSCAR"/>
        </div>
      </form>


    </div>
  )
}
