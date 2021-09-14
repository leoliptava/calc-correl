import { Line } from 'react-chartjs-2'
import styles from '../styles/ChartOne.module.css'
import { useEffect, useState } from 'react'
import FilterStock from '../pages/api/FilterStock'


export default function ChartOne() {

    const [labelsChart, setLabelsChart] = useState([])
    const [dataChart, setDataChart] = useState([])

    
    useEffect(() => {


            
        let dfDate = FilterStock.dateStock().then((results) => {
            
            let dataFrameDate = []

            for (let i = 0; i <= 9; i++) {
                
                dataFrameDate.push(results[i])
                
            }

            setLabelsChart(dataFrameDate)
            
        })

        let dfPrice = FilterStock.closeStock().then((results) => {
            
            let dataFramePrice = []

            for ( let i = 0; i <= 9; i++) {
            
                dataFramePrice.push(results[i])
            
            }

            setDataChart(dataFramePrice)
        }).catch(error => console.error(error))
            
        
    }, [])


    return (
        <div className={styles.chart}>
            
            <Line 
            
                data={{
                    labels: labelsChart,
                    datasets: [{
                        label: "PETR3",
                        data: dataChart,
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