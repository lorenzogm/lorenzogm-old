import { GetStaticProps } from 'next'

import { HomePage } from '~/components'
import { getAllDocs } from '~/utils/server'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const docs = getAllDocs()

  return {
    props: { docs },
  }
}

export default HomePage
