import axios from "axios";

export const FETCHING_POKE_START = "FETCHING_POKE_START";
export const FETCHING_POKE_SUCCESS = "FETCHING_POKE_SUCCESS";
export const FETCH_POKE_DATA_SUCCESS = "FETCH_POKE_DATA_SUCCESS";
export const FETCHING_POKE_ERROR = "FETCHING_POKE_ERROR";

export const fetchPokemon = () => (dispatch) => {
  dispatch({
    type: FETCHING_POKE_START
  });
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCHING_POKE_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: FETCHING_POKE_ERROR,
        payload: err.message,
      });
    });
};

export const fetchPokemonData = url => dispatch => {
  dispatch({
    type: FETCHING_POKE_START
  })
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: FETCH_POKE_DATA_SUCCESS,
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_POKE_DATA_SUCCESS,
        payload: err.message,
      })
    })
}