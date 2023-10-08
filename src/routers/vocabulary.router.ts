import {
  createVocabulary,
  deleteVocabulary,
  getVocabulary,
  getVocabularyById,
  updateVocabulary,
} from '@/controllers'
import {
  createVocabularySchemas,
  deleteVocabularySchemas,
  getVocabularyByIdSchemas,
  getVocabularySchemas,
  updateVocabularySchemas,
} from '@/schemas'
import Elysia from 'elysia'

export const VocabularyGroupApi = (api: Elysia): Elysia =>
  api.group('/vocabulary', (vocabulary) =>
    vocabulary
      .post('/', createVocabulary, createVocabularySchemas)
      .post('/:id', updateVocabulary, updateVocabularySchemas)
      .delete('/:id', deleteVocabulary, deleteVocabularySchemas)
      .get('/', getVocabulary, getVocabularySchemas)
      .get('/:id', getVocabularyById, getVocabularyByIdSchemas)
  )
