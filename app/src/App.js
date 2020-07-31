import React from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";

// coins we want to include
// go back to coingecko and do this later ( TOO MUCH DATA D: )
// 1. Bitcoin
//      id: "bitcoin"
//      symbol: "b2g"
// 2. Ethereum
//      id: "ethereum"
//      symbol: "eth"
// 3. NEO
//      id: "neo"
//      symbol:  "neo"
// 4. EOS
//      id:  "eos"
//      symbol:  "eos"
// 5. XRP
//      id: "ripple"
//      symbol:  "xrp"

function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));

  return (
    <div className="App">
      <h1>Pokemon Finder</h1>
      <PokemonList />
    </div>
  );
}

export default App;
