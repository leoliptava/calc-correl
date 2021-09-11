import styles from '../styles/dashboard.module.css';
import Button from "../components/Button";
import LastPrice from "../components/LastPrice";



export default function Dashboard () {
    return (
        <div className={styles.dashboard}>
            <div className={styles.navBar}>
                <Button href="/" text="HOME"/>
            </div>

            <div className={styles.bodyDashboard}>

                <div className={styles.container}>
                    
                    <div className={styles.lastPrice}>
                        <LastPrice />
                    </div>
                    <div className={styles.moveAverage}>
                        
                    </div>
                    <div className={styles.correlStock}>
                        
                    </div>
                    <div className={styles.chartPriceOne}>
                        
                    </div>
                    <div className={styles.chartPriceTwo}>
                        
                    </div>
                    <div className={styles.historyPrice}>
                        
                    </div>
                
                </div>




            </div>
        </div>
    )
}