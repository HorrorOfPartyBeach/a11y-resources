type Props = {
  children?: React.ReactNode
}

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <header className="min-h-100 h-48 bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
      <div>Accessibilty Resources</div>
    </header>
  )
}
