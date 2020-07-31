import {
  FETCHING_POKE_START,
  FETCHING_POKE_SUCCESS,
  FETCHING_POKE_ERROR,
  FETCH_POKE_DATA_SUCCESS,
} from "../actions/index";

const initialState = {
  pokemon: [],
  isFetching: false,
  error: "",
  pokemonData: []
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POKE_START:
      console.log(state.pokemon)
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_POKE_SUCCESS:
      console.log(state.pokemon)
      return {
        ...state,
        isFetching: false,
          pokemon: action.payload,
          error: "",
      };
    case FETCH_POKE_DATA_SUCCESS:
      console.log('f')
      return {
        ...state,
        isFetching: false,
          pokemonData: [...state.pokemonData, action.payload]
      }
      case FETCHING_POKE_ERROR:
        return {
          ...state,
          isFetching: false,
            error: action.payload
        }
        default:
          return state;
  }
}