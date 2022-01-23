import type { LinkProps as LinkNextProps } from 'next/link'
import LinkNext from 'next/link'
import type { ReactElement, ReactNode } from 'react'

export type LinkProps = LinkNextProps & {
  children: ReactNode
}

export function Link({ children, href }: LinkProps): ReactElement {
  return (
    <LinkNext href={href}>
      <a className="underline font-bold">{children}</a>
    </LinkNext>
  )
}
