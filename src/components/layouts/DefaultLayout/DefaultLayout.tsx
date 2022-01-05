import { ReactNode } from 'react'

import { Footer, Header } from '~/ui'

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
