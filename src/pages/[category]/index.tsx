import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllDocs, getAllDocsCategories, getHeaderData } from '~/api'
import { CategoryPage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticPaths: GetStaticPaths = () => {
  const docsCategories = getAllDocsCategories()

  const paths = docsCategories.map((docsCategory) => `/${docsCategory}`)

  return { paths, fallback: 'blocking' }
}

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = ({ params }) => {
  const header = getHeaderData()

  if (!params || !params.category) {
    return {
      props: { header },
      notFound: true,
    }
  }

  if (Array.isArray(params.category)) {
    return {
      props: { header },
      notFound: true,
    }
  }

  const docs = getAllDocs()
  const docsCategory = docs[params.category]

  if (!docsCategory) {
    return {
      props: { docs, header },
      notFound: true,
    }
  }

  return { props: { docsCategory, header } }
}

export default CategoryPage
