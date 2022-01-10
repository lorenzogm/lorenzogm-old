import fs from 'fs'
import grayMatter from 'gray-matter'
import path from 'path'

type GetAllFileProps = {
  folderPath: string
}
export function getAllFiles({ folderPath }: GetAllFileProps) {
  const docs = fs.readdirSync(path.join(folderPath))

  return docs
    .filter((folderName) => folderName.indexOf('.') === -1)
    .map((folderName) => {
      const filePath = path.join(folderPath, folderName, folderName)

      const markdownWithMeta = fs.readFileSync(`${filePath}.mdx`, 'utf-8')
      const { data } = grayMatter(markdownWithMeta)
      return {
        date: data.date,
        description: data.description,
        filePath,
        imageURL: data.imageURL,
        slug: folderName,
        tags: data.tags,
        title: data.title,
      }
    })
}
