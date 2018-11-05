import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.location.pathname.slice(1)) {
    case 'login':
      return ({
        processForm: (user) => dispatch(login(user))
      });
    case 'signup':
      return ({
        processForm: (user) => dispatch(login(user))
      });
    default:
      return ({
        processForm: (user) => dispatch(signup(user))
      });
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
