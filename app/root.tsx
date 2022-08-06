import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Header } from './components/Header/Header'

import styles from './styles/tailwind.css'
import customStyles from './styles/index.css'
//import Courses from './routes/courses'

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: customStyles },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Accessibility Resources',
  viewport: 'width=device-width,initial-scale=1',
})

export function ErrorBoundary({ error }: any) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="m-4">
        <h1 className="text-2xl">Something went wrong!</h1>
        <p>{error.message}</p>
      </body>
    </html>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-pink-400">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
