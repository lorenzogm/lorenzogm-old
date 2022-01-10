import { ReactNode } from 'react'

import { Container } from '~/components'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}
