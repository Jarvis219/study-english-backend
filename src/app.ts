import bearer from '@elysiajs/bearer'
import cors from '@elysiajs/cors'
import jwt from '@elysiajs/jwt'
import { Elysia } from 'elysia'
import { prefixDefaultApi } from './constants'
import { connectDB } from './database'
import { AuthGroupApi, CategoryGroupApi, VocabularyGroupApi } from './routers'

connectDB()

const app = new Elysia()
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400,
  })
)

app.use(bearer())
app.use(
  jwt({
    name: 'jwt',
    secret: process.env.JWT_SECRET_KEY as string,
    exp: '60d',
  })
)

app.group(prefixDefaultApi, (api) =>
  api.use(AuthGroupApi).use(CategoryGroupApi).use(VocabularyGroupApi)
)

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${process.env.PORT}`
  )
)
