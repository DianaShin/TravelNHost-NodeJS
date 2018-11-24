import { GET_HOSTS, HOSTS_LOADING } from "../actions/hosts/index";
import normalizeItems from "../utils/normalize_items";

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
        hosts: normalizeItems(action.payload, '_id') || {},
        loading: false
      }
    }
    default:
      return state;
  }
}

export default hostsReducer;
