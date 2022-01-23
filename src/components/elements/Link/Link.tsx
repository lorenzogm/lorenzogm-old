import type { LinkProps as LinkNextProps } from 'next/link'
import LinkNext from 'next/link'
import type { ReactElement, ReactNode } from 'react'

export type LinkProps = LinkNextProps & {
  children: ReactNode
  className?: string
  component?: 'a' | 'button'
}

export function Link({
  className: customClassName,
  children,
  href,
  component: Component = 'a',
}: LinkProps): ReactElement {
  const className =
    Component === 'a'
      ? 'py-2 px-6 flex hover:underline hover:underline-offset-8 hover:decoration-2'
      : 'uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 transition ease-in-out hover:-translate-y-1 hover:scale-105 text-md'

  return (
    <LinkNext href={href}>
      <Component className={customClassName || className}>{children}</Component>
    </LinkNext>
  )
}
