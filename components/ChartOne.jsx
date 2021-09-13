import { Line } from 'react-chartjs-2'
import styles from '../styles/ChartOne.module.css'

export default function ChartOne() {
    return (
        <div className={styles.chart}>
            
            <Line 
            
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: "PETR3",
                        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                        backgroundColor: "blue",
                        borderColor: "blue"
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                }}
            
            />

        </div>
    )
}