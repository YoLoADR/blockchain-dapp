const express = require('express')
const app = express()
const bodyParser = require('body-parser')

/**Handling all the parsing */
app.use(bodyParser.json())
app.post('/', (req, res) => {
	const email = req.body.email
	const amount = req.body.amount

	res.send({ amount: amount, email: email })
})
app.listen(3000, () => {
	console.log('server is running and listen port 3000')
})
