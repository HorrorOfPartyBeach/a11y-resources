import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <main
      className="h-full"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      <article className="bg-slate-200 text-lg ">
        <h2 className="mx-8 pb-10 pt-16 text-3xl font-bold text-slate-800">
          Welcome!
        </h2>

        <p className="mx-8 pb-8">
          My name is Emma and I'm a Frontend Software Engineer and Accessibility
          Advocate. Over the last few years, I've gathered up a lot of
          accessiblity resources and I wanted a place to share them with people.
        </p>

        <p className="mx-8 pb-8">
          I also recently tried out the{' '}
          <a
            href="https://remix.run/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-900 underline visited:bg-black visited:text-purple-900 hover:bg-slate-900 hover:text-blue-200"
          >
            Remix framework
          </a>{' '}
          and found it a lot of fun, so I decided to use it for this site.
        </p>
      </article>

      <article className="mx-8 bg-pink-400 pt-10">
        <h2 className="text-3xl font-bold text-slate-800">Resource List</h2>
        <ul>
          <Link
            to="/courses"
            className="text-sky-900 underline visited:bg-black visited:text-purple-900 hover:bg-slate-900 hover:text-blue-200"
          >
            Courses
          </Link>
          <li>Articles</li>
          <li>Blogs</li>
          <li>Tools</li>
          <li>Books</li>
          <li>Accredation</li>
        </ul>
      </article>
    </main>
  )
}
