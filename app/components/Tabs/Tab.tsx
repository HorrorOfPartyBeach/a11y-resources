type Props = {
  isOpen?: boolean
  onClick?: () => void
  onKeyDown?: () => void
  groupName?: string
  tabId?: string
  title: string
}

export const Tab: React.FC<Props> = ({
  isOpen = false,
  onClick,
  onKeyDown,
  groupName,
  tabId,
  children,
}) => {
  return <div>{children}</div>
}
