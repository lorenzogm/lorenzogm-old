import { ReactNode } from 'react'

import { Header, HeaderProps } from '~/components'

type DefaultLayoutProps = {
  children: ReactNode
  header: HeaderProps
}

export function DefaultLayout({ children, header }: DefaultLayoutProps) {
  return (
    <div className="h-screen text-white bg-gray-800">
      <div className="container mx-auto">
        <Header navigation={header.navigation} githubLink={header.githubLink} />
        <main>{children}</main>
      </div>
    </div>
  )
}
