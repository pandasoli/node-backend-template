import { Db, MongoClient } from 'mongodb'


class Database {
	private client = {} as MongoClient
	public db = {} as Db

	public async connect() {
		this.client = new MongoClient(process.env.mongoUri as string)
		await this.client.connect()

		this.db = this.client.db('Jiralace')
	}

	public end() {
		this.client.close()
	}
}


export default Database