import { ObjectId } from 'mongodb'

import Database from '@utils/connect'
import User, { BlankUser } from '@models/User'

type Props = {
  _id?: ObjectId | null
  name?: string
  nick?: string
  email?: string
}[]

const GetUser = async (props: Props) => {
	const database = new Database
	await database.connect()

	const collection = database.db.collection('users')
	const get = await collection.findOne({ $or: props }) as User

	let response = BlankUser

	if (get._id)
		response = get

	database.end()
	return response
}


export default GetUser