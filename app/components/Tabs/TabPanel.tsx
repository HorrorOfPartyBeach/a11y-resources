type Props = {
  isOpen: boolean
  groupName: string
  tabId: string
  children?: React.ReactNode
}

export const TabPanel: React.FC<Props> = ({
  isOpen = false,
  groupName,
  tabId,
  children,
}) => {
  return <div>{children}</div>
}
