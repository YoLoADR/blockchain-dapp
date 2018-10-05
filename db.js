const mysql = require('mysql')
const db_config = {
	host: '127.0.0.1',
	user: 'root',
	password: 'yofeatlou',
	database: 'webapp'
}

var connection

function handleDisconnect() {
	const connection = mysql.createConnection(db_config)
	connection.connect(function(err) {
		if (err) {
			console.log('erro when connecting to db :', err)
			setTimeout(handleDisconnect, 2000)
		}
	})
	connection.on('error', function(err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect()
		} else {
			throw err
		}
	})
}

handleDisconnect()
module.exports = connection
