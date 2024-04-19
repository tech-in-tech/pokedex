import { useState, useEffect } from "react";
import axios from "axios";
import "./pokemonlist.css"; 
import Pokemon from "../pokemon/pokemon";

function Pokemonlist() {

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokedexUrl,setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl,setNextUrl] = useState("");
  const [prevUrl,setPrevUrl] = useState("");

  async function downlodePokemons() {
    setIsLoading(true);
    const response = await axios.get(pokedexUrl);
    const pokemonResult = response.data.results;
    console.log(response.data);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
    // console.log(pokemonResultPromise)
    const pokemonData = await Promise.all(pokemonResultPromise);
    // console.log(pokemonData);
    const res = pokemonData.map((pokedata) => {
      const pokemon = pokedata.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types
      }
    });
    console.log(res);
    setPokemonList(res);


    setIsLoading(false);


  }

  useEffect(() => {
    downlodePokemons();
  }, [pokedexUrl])


  return (
    <>
      <div className="pokemon-list-wrapper">
        <div className="list">Pokemon list</div>
        <div className="pokemon-wrapper">
          {(isLoading) ? " is loading....." : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
        </div>
        <div className="controls">
          <button className="b1" disabled={prevUrl==null} onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
          <button className="b2" disabled={nextUrl==null} onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
        </div>
      </div>
    </>
  )
}
export default Pokemonlist