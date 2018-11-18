import { connect } from 'react-redux';
import DestinationShow from './destination_show';
import { getDestination } from '../../actions/destinations/index';

const mapStateToProps = (state, ownProps) => {
  return ({
    destination: state.destinations.destinations.filter(destination => destination.name === ownProps.match.params.destinationName)[0]
  });
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getDestination: (id) => dispatch(getDestination(id))
//   };
// };

export default connect(mapStateToProps, null)(DestinationShow);
