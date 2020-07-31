import React from "react";
import { connect } from "react-redux";
import { fetchPokemon, fetchPokemonData } from "../actions";
import { Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokeCard from "./PokeCard";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px auto",
  },
});

const PokemonList = (props) => {
  const classes = useStyles();
  if (props.isFetching) {
    return <div>Loading...</div>;
  }

  // const handlePokeChanges = (e) => {
  //   props.fetchPokemon(e.target.value);
  // };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.fetchPokemon();
        }}>
        See Pokes
      </Button>

      {props.pokemon.map((poke) => {
        // props.fetchPokemonData(poke.url);
        // console.log(props.pokemonData);

        return (
          <>
            {/* <Card className={classes.root}>
              <p>{poke.name.toUpperCase()}</p>
            </Card> */}
            <PokeCard />

            {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                props.fetchPokemonData(poke.url);
                console.log(props.pokemonData);
              }}>
              Click
            </Button> */}

            {/* {props.pokemonData.map((pokemon) => {
              return <p>{pokemon.baseExperience}</p>;
            })} */}
          </>
        );
      })}

      {/* <PokeCard /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    pokemon: state.pokemon,
    error: state.error,
    pokemonData: state.pokemonData,
  };
};

export default connect(mapStateToProps, { fetchPokemon, fetchPokemonData })(
  PokemonList
);
