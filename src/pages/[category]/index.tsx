import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllDocs, getAllDocsCategories } from '~/api'
import { CategoryPage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticPaths: GetStaticPaths = () => {
  const docsCategories = getAllDocsCategories()

  const paths = docsCategories.map((docsCategory) => `/${docsCategory}`)

  return { paths, fallback: 'blocking' }
}

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = ({ params }) => {
  const docs = getAllDocs()

  if (!params || !params.category) {
    return {
      props: { docs },
      notFound: true,
    }
  }

  if (Array.isArray(params.category)) {
    return {
      props: { docs },
      notFound: true,
    }
  }

  const docsCategory = docs[params.category]
  console.log({ docs, docsCategory })

  if (!docsCategory) {
    console.log('asdf')
    return {
      props: { docs },
      notFound: true,
    }
  }

  return { props: { docs, docsCategory } }
}

export default CategoryPage
