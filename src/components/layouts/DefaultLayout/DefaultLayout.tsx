import { ReactNode } from 'react'

import { Header } from '~/components'
import { Docs } from '~/types'

type DefaultLayoutProps = {
  children: ReactNode
  docs: Docs
}

export function DefaultLayout({ children, docs }: DefaultLayoutProps) {
  return (
    <div className="h-screen text-white bg-gray-900">
      <div className="container mx-auto">
        <Header docs={docs} />
        <main>{children}</main>
      </div>
    </div>
  )
}
