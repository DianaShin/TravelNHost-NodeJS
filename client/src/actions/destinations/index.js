import axios from 'axios';

export const GET_DESTINATIONS = "GET_DESTINATIONS";
export const DESTINATIONS_LOADING = "DESTINATIONS_LOADING";

export const setDestinationsLoading = () => {
  return {
    type: DESTINATIONS_LOADING
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
