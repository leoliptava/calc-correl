const API_KEY = 'demo'
const API_URL_STOCK = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo`
const API_URL_EMA = `https://www.alphavantage.co/query?function=EMA&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=${API_KEY}`


const basicFecth = async (url) => {
  const req = await fetch(url)
  const json = await req.json()
  return json
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getStockData: async () => {
    return await basicFecth(API_URL_STOCK)
  },
  getEMA: async () => {
    return await basicFecth(API_URL_EMA)
  }
}