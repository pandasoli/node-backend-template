import express from 'express'
import bodyparser from 'body-parser'

import Router from './routes'

class App {
	public express: express.Application

	constructor() {
		this.express = express()

		this.middlewares()
		this.routes()
	}

	private middlewares() {
		this.express.use(bodyparser.urlencoded({ extended: false }))
		this.express.use(bodyparser.json())
	}

	private routes() {
		this.express.use(Router)
	}
}

export default App
