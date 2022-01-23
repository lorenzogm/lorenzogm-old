import { ReactNode } from 'react'

import { Header, HeaderProps } from '~/components'

type DefaultLayoutProps = {
  children: ReactNode
  header: HeaderProps
}

export function DefaultLayout({ children, header }: DefaultLayoutProps) {
  return (
    <>
      <Header navigation={header.navigation} githubLink={header.githubLink} />

      <main role="main">{children}</main>
    </>
  )
}
