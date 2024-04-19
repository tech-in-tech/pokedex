import React from "react"
import Search from "../Search/search"
import "./pokedex.css"
import Pokemonlist from "../pokemonlist/pokemonlist"
function Pokedex(){
  return(
    <>
    <div className="pokedex-wrapper">
      
    <Search/>
    <Pokemonlist/>
    </div>
    </>
   

  )
}

export default Pokedex