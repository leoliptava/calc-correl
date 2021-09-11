import styles from '../styles/Button.module.css'


export default function Button(props) {
    return (
        <a href={props.href} className={styles.button}>{props.text}</a>
    )
}