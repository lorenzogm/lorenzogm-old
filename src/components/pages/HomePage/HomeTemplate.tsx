import { Link } from '~/components'
import { Docs } from '~/types'

type HomePageProps = {
  docs: Docs
}

export function HomeTemplate({ docs }: HomePageProps) {
  return (
    <>
      <div className="flex justify-between my-8">
        <div>
          <h1>{`Hi! I'm Lorenzo`}</h1>
          <h2>I make stuff with code</h2>
        </div>
        <p>I need to add a picture here</p>
      </div>
      <hr />
      <div className="flex justify-between">
        {Object.values(docs).map((docsCategory) => (
          <Link key={docsCategory.name} href={`/${docsCategory.name}`} passHref>
            <h3>{docsCategory.name}</h3>
            {/* <p>{docsCategory.description}</p> */}
          </Link>
        ))}
      </div>
    </>
  )
}
