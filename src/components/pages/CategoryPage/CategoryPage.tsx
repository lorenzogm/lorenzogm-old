import { DocsCategory } from '~/types'

import { CategoryTemplate } from './CategoryTemplate'

type CategoryPageProps = {
  docsCategory: DocsCategory
}

export function CategoryPage({ docsCategory }: CategoryPageProps) {
  return <CategoryTemplate docsCategory={docsCategory} />
}
