import React from 'react'
import "../styles/home.css"
import Navbar from '../components/navbar'
import Searchbar from '../components/searchbar'

function Home(): JSX.Element {
  return (
    <div>
        <Navbar/>
        <Searchbar/>
    </div>
  )
}


export default Home