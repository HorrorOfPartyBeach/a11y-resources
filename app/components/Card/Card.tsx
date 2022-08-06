import type { ReactElement } from 'react'
import React from 'react'

type Props = {
  children: ReactElement[]
}

export const Card: React.FC<Props> = ({ children }: Props) => {
  return (
    <section className="m-6 h-5/6 rounded border bg-pink-200 text-black">
      <ul>
        {children.map((item, index) => (
          <li key={`${index}`}>{item.props.title}</li>
        ))}
      </ul>
    </section>
  )
}
