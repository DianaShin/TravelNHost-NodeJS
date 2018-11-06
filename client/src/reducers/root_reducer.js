import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  session: sessionReducer,
  sessionErrors: sessionErrorsReducer
});

export default rootReducer;
