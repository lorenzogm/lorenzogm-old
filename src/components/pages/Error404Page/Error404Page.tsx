import { Link } from '~/components'

export function Error404Page() {
  return (
    <div className="text-center">
      <p>Page not found :(</p>
      <Link href="/" component="button">
        Go home
      </Link>
    </div>
  )
}
