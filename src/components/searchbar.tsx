import React from "react"
import { FaSearch } from "react-icons/fa"
import "../styles/searchbar.css"

const Searchbar: React.FC = () => {
    return (
        <div className="searchbar__conteiner">
            <input
                type = "text"
                placeholder="Pesquise por... Casa em Barão de Cocais, Santa Bárbara"
                className="searchbar__input"
            />
            
            <button className="searchbar__button">
                <FaSearch />
            </button>
            
        </div>
    )
}

export default Searchbar
