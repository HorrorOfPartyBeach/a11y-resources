import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getCourses } from '~/models/courses.server'

type LoaderData = {
  courses: Awaited<ReturnType<typeof getCourses>>
}

export const loader = async () => {
  return json<LoaderData>({
    courses: await getCourses(),
  })
}

export default function Courses() {
  const { courses } = useLoaderData() as LoaderData
  return (
    <main>
      <h1>All my courses</h1>
      <ul>
        {courses.map(course => (
          <>
            <li key={course.id}>{course.title}</li>
            <li>{course.url}</li>
          </>
        ))}
      </ul>
    </main>
  )
}
