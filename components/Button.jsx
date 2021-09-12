import styles from '../styles/Button.module.css'


export default function Button(props) {
    return (
        <a href={props.href} className={props.layout === 'dashboard' ? styles.buttonDash : styles.button}>{props.text}</a>
    )
}