export type Docs = {
  'project-setup': DocsCategory
  'coding-practices': DocsCategory
  articles: DocsCategory
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
