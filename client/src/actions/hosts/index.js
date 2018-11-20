import axios from 'axios'

export const GET_HOSTS = "GET_HOSTS";
export const HOSTS_LOADING = "DESTINATION_LOADING";

export const setHostsLoading = () => {
  return {
    type: HOSTS_LOADING
  }
}

export const getHosts = (destinationName) => dispatch => {
  dispatch(setHostsLoading());
  axios
    .get(`/api/destinations/${destinationName}/hosts`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_HOSTS,
        payload: res.data,
      })
    }).catch(err=> {
      console.log(err);
      dispatch({
        type: GET_HOSTS,
        payload: err.response.data,
      })
    })
}
