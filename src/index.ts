import App from './app'

const PORT = 3000

new App().express.listen(
	PORT,
	() => console.log(`Backend is runing at http://localhost:${PORT}`)
)
