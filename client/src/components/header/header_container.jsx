import { connect } from 'react-redux';
import Header from './header';
import { loginUser, logoutUser } from '../../actions/session/index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  loginUser: (user) => dispatch(loginUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
