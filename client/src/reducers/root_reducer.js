import { combineReducers } from 'redux';
import destinationsReducer from './destinations_reducer';
import sessionReducer from './session_reducer';
import hostsReducer from './hosts_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  session: sessionReducer,
  sessionErrors: sessionErrorsReducer,
  hosts: hostsReducer,
});

export default rootReducer;
