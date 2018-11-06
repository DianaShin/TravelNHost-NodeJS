import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { loginUser } from '../../actions/session/index';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.sessionErrors,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.location.pathname.slice(1)) {
    case 'login':
      return ({
        processForm: (user) => dispatch(loginUser(user))
      });
    case 'signup':
      return ({
        processForm: (user) => dispatch(loginUser(user))
      });
    default:
      return ({
        processForm: (user) => dispatch(loginUser(user))
      });
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
