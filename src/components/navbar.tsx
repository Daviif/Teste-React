import React from 'react'
import "../styles/navbar.css"

const navbar: React.FC = () => {
  return (
    <div className="navbar__conteiner">
        <ul className='navbar__items left'>
            <li> <a href ="#home">Início</a></li>
            <li> <a href ="#comparar">Comparar</a></li>
            <li> <a href ="#favorito">Favoritos</a></li>
            <li><a href ="#sobre">Sobre</a></li>
        </ul>
        <ul className="navbar__items right">
            <li> <a href ="#contato">Contato</a></li>
        </ul>
        <ul className="navbar__btn">
            <li> <a href ="#login">Entrar</a></li>
        </ul>
    </div>
  )
}

export default navbar