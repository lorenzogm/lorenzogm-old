import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

import { Docs } from '~/types'

const FOLDER_PATH = 'docs'

export function getAllDocs(): Docs {
  const categories = fs.readdirSync(path.join(FOLDER_PATH))

  return categories.reduce((previousCategories, category) => {
    const files = fs.readdirSync(path.join(FOLDER_PATH, category))

    const categoryWithoutPrefix = category.split(/^[0-9]*-/, 2)[1]

    return {
      ...previousCategories,
      [categoryWithoutPrefix]: {
        name: categoryWithoutPrefix,
        entries: files
          .filter((folderName) => folderName.indexOf('assets') === -1)
          .map((file) => {
            const filePath = path.join(FOLDER_PATH, category, file)
            const slug = `${categoryWithoutPrefix}/${file.split('.mdx')[0]}`

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
      },
    }
  }, {}) as Docs
}
