const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo'


const printChart = data => {
	console.log(data)
	const dailyData = data['Time Series (Daily)']
	console.log(dailyData)
	const stockDates = Object.keys(dailyData)
	console.log(stockDates)
	const stockPrices = stockDates.map(date => {
		return dailyData[date]['4. close']
	})
	console.log(stockPrices)

	// drawing the chart
	const ctx = document.querySelector('#myChart').getContext('2d')

	new Chart(ctx, {
		type: 'line',
		data: {
			// x - axis:
			labels: stockDates,
			datasets: [
				{
					label: 'Stock Chart',
					backGroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					// y - axis: 
					data: stockPrices
				}
			]
		}
	})
}

fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		printChart(data)
	})
