import styles from '../styles/LastPrice.module.css'

export default function LastPrice() {
    return (
        <>
            <div className={styles.containerStock}>
                <h1>PETR3</h1>
                <div className={styles.containerCard} >
                    <h2 className={styles.LastPrice}>R$ 34,90</h2>
                    <h3 className={styles.positive}>↑ 1,34%</h3>
                </div>
                <div className={styles.containerCard} >
                    <small>10/09/2021</small>
                    <small>22:34</small>
                </div>
            </div>

            <div style={{borderLeft: '1px solid #ddd', margin: "30px 0px"}}></div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <h1>PETR4</h1>
                <div className={styles.containerCard} >
                    <h2 className={styles.LastPrice}>R$ 33,88</h2>
                    <h3 className={styles.negative}>↓ 0,34%</h3>
                </div>
                <div className={styles.containerCard} >
                    <small>10/09/2021</small>
                    <small>22:34</small>
                </div>
            </div>
        </>
    )
}