import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

import { DocsCategory } from '~/types'

import { FOLDER_PATH } from './data'

type GetOneCategoryProps = {
  categoryName: DocsCategory['name']
}
export function getOneDocsCategory({ categoryName }: GetOneCategoryProps): DocsCategory | null {
  const docsCategories = fs.readdirSync(path.join(FOLDER_PATH))

  const categoryFolderName = docsCategories.find((docsCategory) => docsCategory.indexOf(categoryName) !== -1)

  if (!categoryFolderName) {
    return null
  }

  const files = fs.readdirSync(path.join(FOLDER_PATH, categoryFolderName))

  return {
    name: categoryName,
    entries: files
      .filter((folderName) => folderName.indexOf('assets') === -1)
      .map((file) => {
        const filePath = path.join(FOLDER_PATH, categoryFolderName, file)
        const slug = `${categoryName}/${file.split('.mdx')[0]}`

        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')
        const { data } = grayMatter(markdownWithMeta)
        return {
          date: data.date,
          description: data.description,
          filePath,
          // imageURL: data.imageURL,
          slug,
          tags: data.tags,
          title: data.title,
        }
      }),
  }
}
