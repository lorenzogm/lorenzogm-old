import { GetStaticProps } from 'next'

import { getAllDocs } from '~/api'
import { HomePage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const docs = getAllDocs()

  return {
    props: { docs },
  }
}

export default HomePage
