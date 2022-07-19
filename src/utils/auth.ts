import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'

import GetUser from '@controllers/users/Get'
import { BlankUser } from '../models/User'
import Token, { BlankToken } from '@models/Token'

export const create = (_id: ObjectId, nick: string) =>
  jwt.sign({ _id, nick }, process.env.hashKey as string, { expiresIn: '1 day' })

export const valid = (token: string) => token.match(/^Jiralace (.*)$/)

export const decode = async (token: string) => {
  let decoded = BlankToken

  jwt.verify(token, process.env.hashKey as string, (err, $) => {
    if (!err) decoded = $ as Token
  })

  let user = BlankUser

  if (decoded._id) user = await GetUser([{ _id: new ObjectId(decoded._id) }])

  return user
}
