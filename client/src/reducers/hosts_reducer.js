import { GET_HOSTS, HOSTS_LOADING } from "../actions/hosts/index";

const initialState = {
  hosts: [],
  loading: false
}

const hostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case HOSTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_HOSTS: {
      return {
        ...state,
        hosts: action.payload || [],
        loading: false
      }
    }
    default:
      return state;
  }
}

export default hostsReducer;
