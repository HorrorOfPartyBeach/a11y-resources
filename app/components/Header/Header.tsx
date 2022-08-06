type Props = {
  children?: React.ReactNode
}

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <header className="header-text min-h-100 flex h-48 w-full bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 font-mono">
      <h1 className="w-fit flex-1 self-center px-10 py-20 text-lg md:text-5xl">
        Accessibilty Resources
      </h1>
    </header>
  )
}
