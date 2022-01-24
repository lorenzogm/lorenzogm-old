import { Link } from '~/components'

type CardProps = {
  title: string
  description: string
  tags: Array<string>
  href: string
}

export function Card({ title, description, tags, href }: CardProps) {
  return (
    <div className="rounded-lg h-90 cursor-pointer">
      <Link href={href} className="w-full block h-full">
        {/* <img alt="blog photo" src="/images/blog/1.jpg" className="max-h-40 w-full object-cover" /> */}
        <div className="bg-gray-800 w-full p-4">
          <p className="text-white text-xl font-medium mb-2">{title}</p>
          <p className="text-gray-300 font-light text-md">{description}</p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            {tags.map((tag) => (
              <div key={tag} className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
