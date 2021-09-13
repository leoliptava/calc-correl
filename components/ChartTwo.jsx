import { Line } from 'react-chartjs-2'
import styles from '../styles/ChartTwo.module.css'

export default function ChartTwo() {
    return (
        <div className={styles.chart}>

        <Line 
        
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'PETR4',
                    data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                    backgroundColor: 'green',
                    borderColor: 'green'
                }]
            }}
            options={{
                maintainAspectRatio: false
            }}
        
        
        />


        </div>
    )
}