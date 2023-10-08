import { loginUser, logoutUser, registerUser } from '@/controllers'
import { authMiddleware } from '@/middlewares'
import { loginSchemas, registerSchemas } from '@/schemas'
import Elysia from 'elysia'

export const AuthGroupApi = (api: Elysia): Elysia =>
  api.group('/auth', (auth) =>
    auth
      .post('/register', registerUser, registerSchemas)
      .post('/login', loginUser, loginSchemas)
      .post('/logout', logoutUser, {
        beforeHandle: [authMiddleware],
      })
  )
