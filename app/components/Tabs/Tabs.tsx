import { useState } from 'react'
import type { ReactElement } from 'react'
import React from 'react'
import { TabHeader } from './TabHeader'
// import { Link } from '@remix-run/react'

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <section className="m-6 h-5/6 w-1/2 rounded border bg-slate-200 text-black">
      <ul>
        {children.map((item, index) => (
          <TabHeader
            key={index}
            title={item.props.title}
            tabId={index}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        ))}
      </ul>
      {children[activeTab]}
    </section>
  )
}
