import styles from '../styles/MovingAverage.module.css'

export default function MovingAverage() {
    return (
        < div className={styles.container}>
            <h1>Moving Average</h1>
            
            <div className={styles.containerPeriod}>

                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 8 Last Week </h4>
                    <div className={styles.price}>R$ 32,67</div>
                </div>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 20 Last Month </h4>
                    <div className={styles.price}>R$ 33,67</div>
                </div>
            </div>

            <div className={styles.containerPeriod}>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 100 Last Hour </h4>
                    <div className={styles.price}>R$ 29,67</div>
                </div>
                <div className={styles.numPeriod}>
                    <h4 className={styles.h4}> 200 Last Day </h4>
                    <div className={styles.price}>R$ 19,67</div>
                </div>

            </div>
            
        </div>
    )
}