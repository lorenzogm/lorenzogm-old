import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllDocsCategories, getOneDocsCategory } from '~/api'
import { CategoryPage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticPaths: GetStaticPaths = () => {
  const docsCategories = getAllDocsCategories()

  const paths = docsCategories.map((docsCategory) => `/${docsCategory}`)

  return { paths, fallback: 'blocking' }
}

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.category) {
    return {
      notFound: true,
    }
  }

  if (Array.isArray(params.category)) {
    return {
      notFound: true,
    }
  }

  const docsCategory = getOneDocsCategory({ categoryName: params.category })

  if (docsCategory === null) {
    return {
      notFound: true,
    }
  }

  return { props: { docsCategory } }
}

export default CategoryPage
