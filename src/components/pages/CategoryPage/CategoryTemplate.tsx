import { Link } from '~/components'
import { DocsCategory } from '~/types'

type CategoryPageProps = {
  docsCategory: DocsCategory
}

export function CategoryTemplate({ docsCategory }: CategoryPageProps) {
  return (
    <>
      <h1>{docsCategory.name}</h1>
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
