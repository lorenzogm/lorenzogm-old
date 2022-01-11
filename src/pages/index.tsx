import { GetStaticProps } from 'next'

import { Doc, HomeTemplate } from '~/components'
import { getAllFiles } from '~/services/files'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const docs: Array<Doc> = getAllFiles({ folderPath: 'docs' })

  return {
    props: { docs },
  }
}

type HomePageProps = {
  docs: Array<Doc>
}

export default function HomePage({ docs }: HomePageProps) {
  return <HomeTemplate docs={docs} />
}
