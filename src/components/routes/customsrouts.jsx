import { Routes, Route } from "react-router-dom";
import Pokedex from "../pokedex/pokedex";
import Pokemondetailes from "../pokemondetailes/pokemondetailes";
function Customsroutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex/>} />
      <Route path="/pokemon/:id" element={<Pokemondetailes/>} />
    </Routes>
  );
}

export default Customsroutes