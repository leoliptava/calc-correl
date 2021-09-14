import { Line } from 'react-chartjs-2'
import styles from '../styles/ChartTwo.module.css'
import { useEffect, useState } from 'react'
import FilterStock from '../pages/api/FilterStock'

export default function ChartTwo() {

    const [labelsChart, setLabelChart] = useState([])
    const [dataChart, setDataChart] = useState([])

    useEffect(() => {

        let dfDate = FilterStock.dateStock().then((results) => {

            let dataFrameDate = []

            for ( let i = 0; i <= 9; i++) {
                dataFrameDate.push(results[i])
            }

            setLabelChart(dataFrameDate)

        })

        let dfPrice = FilterStock.closeStock().then((results) => {

            let dataFramePrice = []

            for (let i = 0; i <= 9; i++) {
                dataFramePrice.push(results[i])
            }

            setDataChart(dataFramePrice)

        })

    }, [])


    return (
        <div className={styles.chart}>

        <Line 
        
            data={{
                labels: labelsChart,
                datasets: [{
                    label: 'PETR4',
                    data: dataChart,
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