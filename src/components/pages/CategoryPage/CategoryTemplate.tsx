import { Heading, Link } from '~/components'
import { DocsCategory } from '~/types'

type CategoryPageProps = {
  docsCategory: DocsCategory
}

export function CategoryTemplate({ docsCategory }: CategoryPageProps) {
  return (
    <>
      <Heading variant="h1">{docsCategory.name}</Heading>
      <hr />
      {docsCategory.entries.map((doc) => (
        <ul key={doc.slug}>
          <li>
            <Link href={`https://github.com/lorenzogm/lorenzogm/blob/main/${doc.filePath}`}>{doc.title}</Link>:{' '}
            {doc.description}
          </li>
        </ul>
      ))}
    </>
  )
}
