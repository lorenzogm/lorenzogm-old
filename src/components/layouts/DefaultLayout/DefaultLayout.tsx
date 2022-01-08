import { ReactNode } from 'react'

import { Footer, Header } from '~/components'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}
