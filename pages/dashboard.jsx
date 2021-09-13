import styles from '../styles/dashboard.module.css';
import Button from "../components/Button";
import LastPrice from "../components/LastPrice";
import MovingAverage from "../components/MovingAverage";
import CorrelationStock from "../components/CorrelationStock";
import HistoryPriceStocks from "../components/HistoryPriceStocks";
import ChartOne from '../components/ChartOne';
import ChartTwo from '../components/ChartTwo';



export default function Dashboard () {
    return (
        <div className={styles.dashboard}>
            <div className={styles.navBar}>
                <Button href="/" layout='dashboard' text="HM"/>
                <Button href="/" layout='dashboard' text="SP"/>
            </div>

            <div className={styles.bodyDashboard}>

                <div className={styles.container}>
                    
                    <div className={styles.lastPrice}>
                        <LastPrice />
                    </div>
                    <div className={styles.moveAverage}>
                        <MovingAverage />
                    </div>
                    <div className={styles.correlStock}>
                        <CorrelationStock />
                    </div>
                    <div className={styles.chartPriceOne}>
                        <ChartOne />
                    </div>
                    <div className={styles.chartPriceTwo}>
                        <ChartTwo />
                    </div>
                    <div className={styles.historyPrice}>
                        <HistoryPriceStocks />
                    </div>
                
                </div>




            </div>
        </div>
    )
}