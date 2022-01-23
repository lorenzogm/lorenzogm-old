import { Heading, Link, Paragraph } from '~/components'
import { Docs } from '~/types'

import { Styled } from './HomeTemplate.styled'

type HomePageProps = {
  docs: Docs
}

export function HomeTemplate({ docs }: HomePageProps) {
  return (
    <>
      <Styled.Hero>
        <div>
          <Heading variant="h3" component="h1">{`Hi! I'm Lorenzo`}</Heading>
          <Heading variant="h6" component="h2">
            I make stuff with code
          </Heading>
        </div>
        <Paragraph>I need to add a picture here</Paragraph>
      </Styled.Hero>
      <hr />
      <Styled.Categories>
        {Object.values(docs).map((docsCategory) => (
          <Link key={docsCategory.name} href={`/${docsCategory.name}`} passHref>
            <a>
              <Heading variant="h3">{docsCategory.name}</Heading>
            </a>
          </Link>
        ))}
      </Styled.Categories>
    </>
  )
}
