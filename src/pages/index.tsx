import { GetStaticProps } from 'next'

import { getHeaderData } from '~/api'
import { HomePage } from '~/components'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const header = getHeaderData()

  return {
    props: { header },
  }
}

export default HomePage
