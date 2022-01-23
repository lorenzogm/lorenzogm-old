export type Docs = {
  [key: string]: DocsCategory
}

export type DocsCategory = {
  name: string
  entries: Array<DocEntry>
}

type DocEntry = {
  date: string
  description: string
  // imageURL: string
  filePath: string
  slug: string
  tags: Array<string>
  title: string
}
