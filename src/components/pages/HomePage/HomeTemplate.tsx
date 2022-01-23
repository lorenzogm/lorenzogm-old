import { Link } from '~/components'

export function HomeTemplate() {
  return (
    <div className="flex relative z-20 items-center">
      <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <div className="flex flex-col">
          <p className="text-3xl my-6 text-center dark:text-white">Hi, I&#x27;m Lorenzo</p>
          <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
            I do stuff with code
          </h2>
          <div className="flex items-center justify-center mt-4">
            <Link href="/blog" component="button">
              Read the blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
