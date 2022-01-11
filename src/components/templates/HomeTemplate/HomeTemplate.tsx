import { Heading, Link, Paragraph } from '~/components'

import Styled from './HeroTemplate.styled'

type HomePageProps = {
  docs: Array<Doc>
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
      <Heading variant="h2">Docs (WIP)</Heading>
      <Paragraph>This is the documentation I like to use for my projects:</Paragraph>
      {docs.map((doc) => (
        <ul key={doc.slug}>
          <li>
            <Link href={`https://github.com/lorenzogm/lorenzogm/blob/main/${doc.filePath}.mdx`}>{doc.title}</Link>:{' '}
            {doc.description}
          </li>
        </ul>
      ))}
    </>
  )
}

export type Doc = {
  date: string
  description: string
  imageURL: string
  filePath: string
  slug: string
  tags: Array<string>
  title: string
}
