import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
});

export default rootReducer;
