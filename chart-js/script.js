const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo'


const printChart = data => {
	console.log(data)
	const dailyData = data['Time Series (Daily)']
	console.log(dailyData)
	const stockDates = Object.keys(dailyData)
	console.log(stockDates)
	const stockPrices = stockDates.map(date => {
		return dailyData[date]['4.close']
	})
	console.log(stockPrices)
}

fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		printChart(data)
	})
