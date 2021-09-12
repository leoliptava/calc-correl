import styles from '../styles/CorrelationStock.module.css'

export default function CorrelationStock() {
    return (
        < div className={styles.container}>
            <h1>Correlation Stocks</h1>
            
            <div className={styles.containerPeriod}>

                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 8 Last Week </h4>
                    <div className={styles.positive}>+ 98,45%</div>
                </div>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 20 Last Month </h4>
                    <div className={styles.positive}>+ 98,45%</div>
                </div>
            </div>

            <div className={styles.containerPeriod}>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 100 Last Hour </h4>
                    <div className={styles.negative}>- 98,45%</div>
                </div>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 200 Last Day </h4>
                    <div className={styles.negative}>- 98,45%</div>
                </div>

            </div>
            
        </div>
    )
}