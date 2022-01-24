import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link } from '~/components'
import { useToggle } from '~/hooks'
import { Navigation } from '~/types'
import { clsx } from '~/utils'

export type HeaderProps = {
  navigation: Navigation
  githubLink: string
}

export function Header({ navigation, githubLink }: HeaderProps) {
  const [isMobileNavigationOpen, { toggle }] = useToggle()

  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full justify-between">
      <Link href="/" className="uppercase text-white font-black text-3xl flex items-center">
        lorenzogm.com
      </Link>
      <div className="flex items-center">
        <nav
          className={clsx(
            'text-white uppercase text-lg lg:flex items-center',
            isMobileNavigationOpen === 'OPEN'
              ? 'absolute inset-x-0 top-20 bottom-10 bg-gray-800 h-100vh z-30'
              : 'hidden',
          )}
        >
          {navigation.map((navigationItem) => (
            <Link key={navigationItem.href} href={navigationItem.href}>
              {navigationItem.name}
            </Link>
          ))}
          <Link href={githubLink}>GitHub</Link>
        </nav>
        <span className="sr-only">Open main menu</span>
        <button className="lg:hidden flex flex-col ml-4" onClick={toggle} aria-label="Toggle mobile navigation">
          {isMobileNavigationOpen === 'CLOSED' ? (
            <MenuIcon className="block h-6 w-6" />
          ) : (
            <XIcon className="block h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  )
}
