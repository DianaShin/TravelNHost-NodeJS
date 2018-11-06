import { RECEIVE_CURRENT_USER } from '../actions/session/index';

const prevState = {
  currentUser: null
};

const sessionReducer = (state = prevState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: {
        id: action.payload.id,
        username: action.payload.username,
      }};
    default:
      return state;
  }
};

export default sessionReducer;
