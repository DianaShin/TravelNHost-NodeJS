import { GET_DESTINATIONS, DESTINATIONS_LOADING } from "../actions/destinations/index";

const initialState = {
  destinations: [],
  loading: false
}

const destinationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case DESTINATIONS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DESTINATIONS: {
      console.log(action);
      return {
        ...state,
        destinations: action.payload || [],
        loading: false
      };
    }
    default:
      return state;
  }
}

export default destinationsReducer;
