import { authMiddleware } from '@/middlewares'
import { t } from 'elysia'

export const createCategorySchemas = {
  beforeHandle: [authMiddleware],
  body: t.Object({
    name: t.String(),
    description: t.String(),
    image: t.String(),
  }),
  type: 'application/json',
}

export const updateCategorySchemas = {
  beforeHandle: [authMiddleware],
  body: t.Object({
    name: t.Optional(t.String()),
    description: t.Optional(t.String()),
    image: t.Optional(t.String()),
  }),
  type: 'application/json',
}

export const deleteCategorySchemas = {
  beforeHandle: [authMiddleware],
  params: t.Object({
    id: t.String(),
  }),
}
