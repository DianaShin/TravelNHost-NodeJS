import axios from 'axios';

export const GET_DESTINATIONS = "GET_DESTINATIONS";
export const DESTINATIONS_LOADING = "DESTINATIONS_LOADING";

export const GET_DESTINATION = "GET_DESTINATION";
export const DESTINATION_LOADING = "DESTINATION_LOADING";

export const setDestinationsLoading = () => {
  return {
    type: DESTINATIONS_LOADING
  }
}

export const setDestinationLoading = () => {
  return {
    type: DESTINATION_LOADING
  }
}

export const getDestinations = () => dispatch => {
  dispatch(setDestinationsLoading());
  axios
    .get('/api/destinations')
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_DESTINATIONS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_DESTINATIONS,
        payload: err.response.data,
      })
    })
}

export const getDestination = () => dispatch => {
  dispatch(setDestinationLoading());
  axios
    .get('/api/destinations/:destinationId')
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_DESTINATION,
        payload: res.data,
      })
    }).catch(err=> {
      console.log(err);
      dispatch({
        type: GET_DESTINATION,
        payload: err.response.data,
      })
    })
}
