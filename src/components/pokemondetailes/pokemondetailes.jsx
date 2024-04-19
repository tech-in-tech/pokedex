import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import "./pokemondetailes.css"
function Pokemondetailes() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  async function downlodePokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t)=>t.type.name)
    })
    console.log(response.data);
  }

  useEffect(() => {
    downlodePokemon();
  }, []);

  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-details-image" src={pokemon.image}/>
      <div className="pokemon-details-name det">name : {pokemon.name}</div>
      <div className="det">height : {pokemon.height}</div>
      <div className="det">weight : {pokemon.weight}</div>
      <div className="pokemon-details-types det">
        {pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}
      </div>
    </div>
  )
}

export default Pokemondetailes