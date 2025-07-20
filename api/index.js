const { createServer } = require('http')
const { parse } = require('url')

const app = require('../dist/main.js')

module.exports = async (req, res) => {
	const server = createServer(app)
	server.emit('request', req, res)
}
