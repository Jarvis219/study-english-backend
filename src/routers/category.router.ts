import { createCategory, deleteCategory, updateCategory } from '@/controllers'
import {
  createCategorySchemas,
  deleteCategorySchemas,
  updateCategorySchemas,
} from '@/schemas'
import Elysia from 'elysia'

export const CategoryGroupApi = (api: Elysia): Elysia =>
  api.group('/category', (category) =>
    category
      .post('/', createCategory, createCategorySchemas)
      .post('/:id', updateCategory, updateCategorySchemas)
      .delete('/:id', deleteCategory, deleteCategorySchemas)
  )
