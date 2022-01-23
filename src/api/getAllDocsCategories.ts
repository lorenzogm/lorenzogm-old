import fs from 'fs'
import path from 'path'

import { DocsCategory } from '~/types'

import { FOLDER_PATH } from './data'

export function getAllDocsCategories(): Array<DocsCategory['name']> {
  const docsCategories = fs.readdirSync(path.join(FOLDER_PATH))

  return docsCategories.map((docsCategory) => {
    return docsCategory.split(/^[0-9]*-/, 2)[1]
  })
}
