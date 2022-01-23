import { GetStaticProps } from 'next'

import { getAllDocs, getHeaderData } from '~/api'
import { HomePage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const docs = getAllDocs()
  const header = getHeaderData()

  return {
    props: { docs, header },
  }
}

export default HomePage
