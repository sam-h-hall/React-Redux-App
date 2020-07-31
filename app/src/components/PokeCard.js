import React from "react";
import { connect } from "react-redux";
import { Card, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pokeball from "../img/pokeball.jpeg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px auto",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
  },
});

const PokeCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.pokemon.map((poke) => {
        return (
          <Card className={classes.root}>
            <img src={pokeball} style={{ width: "60px", maxHeight: "40px" }} />
            <p>{poke.name.toUpperCase()}</p>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

export default connect(mapStateToProps, {})(PokeCard);
