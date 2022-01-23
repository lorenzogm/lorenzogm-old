import { Link } from '~/components'
import { Docs } from '~/types'

type HeaderProps = {
  docs: Docs
}

export function Header({ docs }: HeaderProps) {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <a className="text-2xl">lorenzogm.com</a>
      </Link>
      <ul className="flex">
        {Object.keys(docs).map((docsCategory) => (
          <li className="ml-8" key={docsCategory}>
            <Link href={`/${docsCategory}`}>
              <a>{docsCategory}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
