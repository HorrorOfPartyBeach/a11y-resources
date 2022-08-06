type Props = {
  activeTab: number
  tabId: number
  //   groupName: string
  //   label: string
  setActiveTab: (index: number) => void
  //   children?: React.ReactNode
  title: string
}

export const TabHeader: React.FC<Props> = ({
  activeTab,
  tabId,
  //   groupName,
  //   label,
  setActiveTab,
  //   children,
  title,
}) => {
  return (
    <li className={`li inline-flex ${activeTab === tabId ? 'active' : ''}`}>
      <button onClick={() => setActiveTab(tabId)}>{title}</button>
    </li>
  )
}
