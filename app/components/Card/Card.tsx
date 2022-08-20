import React from 'react'
import { Link } from '@remix-run/react'

type Props = {
  title: string
  image?: React.ReactElement
  linkText: string
  link: string
  className?: string
}

export const Card: React.FC<Props> = ({
  title,
  linkText,
  image,
  link,
}: Props) => {
  return (
    <div className="m-6 min-h-card rounded border bg-pink-200 text-black">
      <div className="p-4 text-center">
        <h2>{title}</h2>
        {image}
        <Link
          to={link}
          className="text-sky-900 underline visited:bg-black visited:text-purple-900 hover:bg-slate-900 hover:text-blue-200"
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}
