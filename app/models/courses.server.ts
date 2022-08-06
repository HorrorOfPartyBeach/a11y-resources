type Course = {
  id: string
  title: string
  url: string
}

export async function getCourses(): Promise<Array<Course>> {
  return [
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
  ]
}
