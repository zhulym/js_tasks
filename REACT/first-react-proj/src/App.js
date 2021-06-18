import React from 'react'
import Header from './components/Header/Header'
import './App.css';


const App = () => {

  const menuItems = [
    { href: '/main', title: 'Главная' },
    { href: '/service', title: 'Услуги' },
    { href: '/portfolio', title: 'Портфолио' },
    { href: '/about', title: 'О нас' },
    { href: '/contacts', title: 'Контакты' },
  ]


  return (
    <div className="App">
      <Header items={menuItems} />
    </div>
  );
}

export default App;