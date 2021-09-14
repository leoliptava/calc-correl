import styles from '../styles/LastPrice.module.css'
import { useEffect, useState } from 'react'
import FilterStock from '../pages/api/FilterStock' 

export default function LastPrice() {

    const [symbolOne, setSymbolOne] = useState()
    const [symbolTwo, setSymbolTwo] = useState()
    const [priceOne, setPriceSotckOne] = useState()
    const [priceTwo, setPriceSotckTwo] = useState()

    useEffect(() => {

        let symbolStock2 = FilterStock.symbolStock().then((results) => {

            let symbol = results["2. Symbol"]
            setSymbolOne(symbol)

        })

        let symbolStock1 = FilterStock.symbolStock().then((results) => {

            let symbol = results["2. Symbol"]
            setSymbolTwo(symbol)

        })


        let priceStockOne = FilterStock.closeStock().then((results) => {
            let priceOne = results[0]

            setPriceSotckOne(priceOne)
        })

        let priceStockTwo = FilterStock.closeStock().then((results) =>{
            let priceTwo = results[0]

            setPriceSotckTwo(priceTwo)
        })



    }, [])


    return (
        <>
            <div className={styles.containerStock}>
                <h1>{symbolOne}</h1>
                <div className={styles.containerCard} >
                    <h2 className={styles.LastPrice}>$ {priceOne}</h2>
                    <h3 className={styles.positive}>↑ 1,34%</h3>
                </div>
                <div className={styles.containerCard} >
                    <small>10/09/2021</small>
                    <small>22:34</small>
                </div>
            </div>

            <div style={{borderLeft: '1px solid #ddd', margin: "30px 0px"}}></div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <h1>{symbolTwo}</h1>
                <div className={styles.containerCard} >
                    <h2 className={styles.LastPrice}>$ {priceTwo}</h2>
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