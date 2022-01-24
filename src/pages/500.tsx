import { GetStaticProps } from 'next'

import { getHeaderData } from '~/api'
import { Error404Page } from '~/components'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const header = getHeaderData()

  return {
    props: { header },
  }
}

export default Error404Page
