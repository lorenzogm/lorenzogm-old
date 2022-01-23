import { ReactNode } from 'react'

import { Header, HeaderProps } from '~/components'

type DefaultLayoutProps = {
  children: ReactNode
  header: HeaderProps
}

export function DefaultLayout({ children, header }: DefaultLayoutProps) {
  return (
    <div className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen text-white">
      <Header navigation={header.navigation} githubLink={header.githubLink} />

      <main role="main">{children}</main>
    </div>
  )
}
