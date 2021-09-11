import ApiStock from "./ApiStock";

const API_PERIOD = "Weekly Time Series"



// eslint-disable-next-line import/no-anonymous-default-export
export default {

    dateStock: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let datesStocks = []

        for (let i in dfTimeSeries) {
            datesStocks.push(i)
        }

        return datesStocks
    },

    openStock: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let openStocks = []

        for (let i in dfTimeSeries) {
            openStocks.push(parseFloat(dfTimeSeries[i]["1. open"]))
        }

        return openStocks
    },

    highSotck: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let highSotck = []

        for (let i in dfTimeSeries) {
            highSotck.push(parseFloat(dfTimeSeries[i]["2. high"]))
        }

        return highSotck
    },

    lowStock: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let lowStock = []

        for (let i in dfTimeSeries) {
            lowStock.push(parseFloat(dfTimeSeries[i]["3. low"]))
        }

        return lowStock
    },

    closeStock: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let closeStockArray = []

        for (let i in dfTimeSeries) {
            closeStockArray.push(parseFloat(dfTimeSeries[i]["4. close"]))
        }

        return closeStockArray
    },

    volumeStock: async () => {
        let dataFrame = await ApiStock.getStockData();
        let dfTimeSeries = dataFrame[`${API_PERIOD}`]

        let volumeStock = []

        for (let i in dfTimeSeries) {
            volumeStock.push(dfTimeSeries[i]["5. volume"])
        }

        return volumeStock
    },

    getEMA: async () => {
        let dataFrame = await ApiStock.getEMA();
        let dfFrame = dataFrame["Technical Analysis: EMA"]

        let dfFrameArray = []

        for (let i in dfFrame) {
            dfFrameArray.push(dfFrame[i])
        }

        return dfFrameArray
    }
   
}