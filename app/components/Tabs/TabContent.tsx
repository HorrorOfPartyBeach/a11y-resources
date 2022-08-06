type Props = {
  activeTab: boolean
  groupName: string
  children?: React.ReactNode
}

export const TabContent: React.FC<Props> = ({
  activeTab = false,
  groupName,
  children,
}) => {
  return <div>{children}</div>
}
