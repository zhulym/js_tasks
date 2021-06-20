import MenuItem from './MenuItem'

const Header = (props) => {

  const transformItems = props.items.map((item, i) => {
    return <MenuItem key={i} href={item.href} title={item.title} />
  })

  return (
    <header className="App-header">
      <nav>
        <ul className="header__menu">
          {transformItems}
        </ul>
      </nav>
    </header>
  )
}

export default Header