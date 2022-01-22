import { Docs } from '~/types'

import { HomeTemplate } from './HomeTemplate'

type HomePageProps = {
  docs: Docs
}

export function HomePage({ docs }: HomePageProps) {
  return <HomeTemplate docs={docs} />
}
