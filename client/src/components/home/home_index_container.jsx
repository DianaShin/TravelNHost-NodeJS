import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { getDestinations } from '../../actions/destinations/index';

const mapStateToProps = state => ({
  destinations: state.destinations.destinations,
  loading: state.destinations.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDestinations: () => dispatch(getDestinations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
