import { connect } from 'react-redux';
import DestinationShow from './destination_show';
import { getDestination } from '../../actions/destinations/index';
import { getHosts } from '../../actions/hosts/index';

const mapStateToProps = (state, ownProps) => {
  return ({
//    destination: state.destinations.destinations.filter(destination => destination.name === ownProps.match.params.destinationName)[0]
      destination: state.destinations.destinations[0] || [],
      hosts: state.hosts.hosts || {}
  });
};

const mapDispatchToProps = dispatch => {
  return {
    getDestination: (destinationName) => dispatch(getDestination(destinationName)),
    getHosts: (destinationName) => dispatch(getHosts(destinationName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationShow);
