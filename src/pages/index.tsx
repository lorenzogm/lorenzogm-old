import { GetStaticProps } from 'next'

import { Heading, Link, Paragraph } from '~/components'
import { getAllFiles } from '~/services/files'

// eslint-disable-next-line func-style
export const getStaticProps: GetStaticProps = () => {
  const docs: Array<Doc> = getAllFiles({ folderPath: 'docs' })

  return {
    props: { docs },
  }
}

type HomePageProps = {
  docs: Array<Doc>
}

export default function HomePage({ docs }: HomePageProps) {
  return (
    <>
      <Heading variant="h2">Docs</Heading>
      <Paragraph>This is the documentation I like to use for my projects:</Paragraph>
      {docs.map((doc) => (
        <ul key={doc.slug}>
          <li>
            <Link href={`https://github.com/lorenzogm/lorenzogm/blob/main/${doc.slug}.mdx`}>{doc.title}</Link>:{' '}
            {doc.description}
          </li>
        </ul>
      ))}
    </>
  )
}

type Doc = {
  date: string
  description: string
  imageURL: string
  filePath: string
  slug: string
  tags: Array<string>
  title: string
}
