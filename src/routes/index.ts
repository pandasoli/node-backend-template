import { Router } from 'express'

import SignUp from './signup'
import Test from './test'


const router = Router()

router
	.post('/signup', SignUp)

	.post('/test', Test)

	.get('/', (req, res) => {
		res.json('Hello, World!')
	})


export default router