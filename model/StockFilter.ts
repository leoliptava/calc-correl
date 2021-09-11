useEffect(() => {
    const loadAll = async () => {
        let dataFrame = await ApiStock.getStockData()
        let dfTimeSeries = dataFrame["Time Series (Daily)"]

        let teste = []

        teste.push(dfTimeSeries)

        console.log(teste)
        let listStock = []

        for (let i in dfTimeSeries) {

            listStock.push(dfTimeSeries[i])
            // console.log(`Fechamento do dia ${i} - ${dfTimeSeries[i]["4. close"]}`)
        }

        // console.log(listStock[0])
    }

    loadAll()

}, [])