import { ObjectId } from 'mongodb'

type User = {
	_id?: ObjectId | null
	name: string
	nick: string
	email: string
	pass: string
	validated: boolean
}

const BlankUser: User = {
	_id: null,
	name: '',
	nick: '',
	email: '',
	pass: '',
	validated: false,
}

export { BlankUser }
export default User
