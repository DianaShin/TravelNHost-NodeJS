import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import { Route, Switch } from 'react-router-dom';

import './header.scss';


class Header extends React.Component {

  handleCloseModal = () => {
      return this.props.history.push('/');
  }

  render() {
    return(
      <div>
          <nav>
            <div className="header-left">
              <Link to="/">
              <img
                className="logo"
                alt="logo"
                src="http://res.cloudinary.com/ayoung0131/image/upload/v1514944664/backpackicon_htgwjb.svg" />
              </Link>
              <h1 className="brand-name">TRAVEL N HOST</h1>
            </div>
            {!this.props.currentUser &&
            (<ul className="header-nav-buttons-list">
              <li className='header-nav-demo-button'>
                <button className='header-nav-demo-button' onClick={this.demo}>DEMO</button>
              </li>
              <li className='header-nav-buttons-list-item'>
                <Link to='/signup' className='header-nav-buttons-list-link'>SIGN UP</Link>
              </li>
              <li className='header-nav-buttons-list-item'>
                <Link to='/login' className='header-nav-buttons-list-link'>LOG IN </Link>
                  <Switch>
                    <Route path='/signup'>
                      <Modal
                        isOpen={true}
                        onRequestClose={this.handleCloseModal}
                        contentLabel='sessionModal'
                        className="modal"
                        overlayClassName="modalOverlay"
                        shouldCloseOnOverlayClick={true}
                        ariaHideApp={false}
                      >
                        <SessionFormContainer
                          formType={"signup"}
                          closeModal={this.handleCloseModal}
                          openModal={this.handleOpenModal}/>
                      </Modal>
                    </Route>
                    <Route path='/login'>
                      <Modal
                        isOpen={true}
                        onRequestClose={this.handleCloseModal}
                        contentLabel='sessionModal'
                        className="modal"
                        overlayClassName="modalOverlay"
                        shouldCloseOnOverlayClick={true}
                        ariaHideApp={false}
                        >
                        <SessionFormContainer
                          formType={"login"}
                          closeModal={this.handleCloseModal}
                          openModal={this.handleOpenModal}/>
                      </Modal>
                    </Route>
                    <Route path='/'>
                      <Modal
                        isOpen={false}
                        onRequestClose={this.handleCloseModal}
                        contentLabel='sessionModal'
                        className="modal"
                        overlayClassName="modalOverlay"
                        shouldCloseOnOverlayClick={false}
                        />
                    </Route>
                  </Switch>
              </li>
            </ul>)}
            {this.props.currentUser &&
              <ul className="header-nav-buttons-list">
                <li className='header-nav-buttons-list-item'>
                  <Link to="/dashboard">
                    <button className='header-nav-buttons-list-item dashboard'>{this.props.currentUser.username}'S DASHBOARD</button>
                  </Link>
                </li>
                  <li className='header-nav-buttons-list-item'>
                    <button className='header-nav-buttons-list-item dashboard' onClick={()=>this.props.logoutUser().then(()=>{return this.props.history.push('/')})}>LOGOUT</button>
                  </li>
              </ul>
            }
          </nav>
          <div className="whitespace"> </div>
        </div>
    )
  }
}

export default Header;
