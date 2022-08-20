import { Link } from '@remix-run/react'

export default function Developers() {
  return (
    <main className="min-h-screen">
      <h1>Info for Developers</h1>
      <Link
        to="/courses"
        className="text-sky-900 underline visited:bg-black visited:text-purple-900 hover:bg-slate-900 hover:text-blue-200"
      >
        Courses
      </Link>
      <ul>
        <li>Articles</li>
        <li>Blogs</li>
        <li>Tools</li>
        <li>Books</li>
        <li>Accredation</li>
      </ul>
    </main>
  )
}
