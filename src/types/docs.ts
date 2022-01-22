export type Docs = {
  'project-setup': DocsCategory
  'coding-practices': DocsCategory
  articles: DocsCategory
}

type DocsCategory = {
  name: 'project-setup' | 'coding-practices' | 'articles'
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
