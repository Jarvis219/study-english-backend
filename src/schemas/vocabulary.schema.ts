import { authMiddleware } from '@/middlewares'
import { t } from 'elysia'

export const createVocabularySchemas = {
  beforeHandle: [authMiddleware],
  body: t.Object({
    image: t.Optional(t.String()),
    word: t.String(),
    meaning: t.String(),
    pronunciation: t.Optional(t.String()),
    example: t.Optional(t.String()),
    exampleMeaning: t.Optional(t.String()),
    level: t.Optional(t.Number()),
    isFavorite: t.Optional(t.Boolean()),
    isPopular: t.Optional(t.Boolean()),
    isLearned: t.Optional(t.Boolean()),
    rewriteNumber: t.Optional(t.Number()),
    categoryId: t.String(),
    userId: t.Optional(t.String()),
  }),
  type: 'application/json',
}

export const updateVocabularySchemas = {
  beforeHandle: [authMiddleware],
  body: t.Object({
    image: t.Optional(t.String()),
    word: t.Optional(t.String()),
    meaning: t.Optional(t.String()),
    pronunciation: t.Optional(t.String()),
    example: t.Optional(t.String()),
    exampleMeaning: t.Optional(t.String()),
    level: t.Optional(t.Number()),
    isFavorite: t.Optional(t.Boolean()),
    isPopular: t.Optional(t.Boolean()),
    isLearned: t.Optional(t.Boolean()),
    rewriteNumber: t.Optional(t.Number()),
    categoryId: t.Optional(t.String()),
    userId: t.Optional(t.String()),
  }),
  type: 'application/json',
}

export const deleteVocabularySchemas = {
  beforeHandle: [authMiddleware],
  params: t.Object({
    id: t.String(),
  }),
}

export const getVocabularySchemas = {
  beforeHandle: [authMiddleware],
}

export const getVocabularyByIdSchemas = {
  beforeHandle: [authMiddleware],
  params: t.Object({
    id: t.String(),
  }),
}
