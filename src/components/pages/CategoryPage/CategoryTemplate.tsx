import { Card } from '~/components'
import { DocsCategory } from '~/types'

type CategoryPageProps = {
  docsCategory: DocsCategory
}

export function CategoryTemplate({ docsCategory }: CategoryPageProps) {
  return (
    <>
      <h1>{docsCategory.name}</h1>
      <hr />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 place-items-start">
        {docsCategory.entries.map((doc) => (
          <Card
            key={doc.slug}
            title={doc.title}
            href={`https://github.com/lorenzogm/lorenzogm/blob/main/${doc.filePath}`}
            description={doc.description}
            tags={doc.tags}
          />
        ))}
      </div>
    </>
  )
}
