import 'dotenv/config'
import { sign } from './jwt/sign'
import { verify } from './jwt/verify'

const secret = process.env.JWT_SECRET as string

if (!secret) throw new Error('JWT_SECRET not defined')

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000), // 1 day
  data: {
    sub: '@brabo.dev',
  },
  secret,
})

verify({
  token,
  secret
})

