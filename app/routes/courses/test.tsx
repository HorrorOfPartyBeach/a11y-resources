// import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

type Course = {
  id: string
  title: string
  url: string
}

type LoaderData = {
  courses: Array<Course>
}

export const loader = async () => {
  return json<LoaderData>({
    courses: [
      {
        id: '1',
        title: 'Web Accessibility - Developing with Empathy by Google',
        url: 'https://www.udacity.com/course/web-accessibility--ud891',
      },
      {
        id: '2',
        title: 'Website Accessibility, v2 by Jon Kuperman (Adobe)',
        url: 'https://frontendmasters.com/courses/accessibility-v2/',
      },
      {
        id: '3',
        title: "Microsoft's Accessibility Fundamentals Learning Path",
        url: 'https://docs.microsoft.com/en-gb/learn/paths/accessibility-fundamentals/',
      },
    ],
  })
}

export default function Courses() {
  const { courses } = useLoaderData() as LoaderData
  console.log(courses, 'COURSES')
  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {courses.map(course => (
          <>
            <li key={course.id}>{course.title}</li>
            <li>{course.url}</li>
          </>
        ))}
      </ul>
    </div>
  )
}
