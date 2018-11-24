import React from 'react';
import { withRouter } from 'react-router';
import './host_index_item.scss';

class HostIndexItem extends React.Component {
  handleClick = () => {
    return this.props.history.push(`/destinations/${this.props.destination}/hosts/${this.props.id}`);
  }

  render() {
    return (
      <li className="hosts-info-box" onClick={this.handleClick}>
        <div className="host-details-align">
          <img className="host-profile-pic" src={this.props.imageUrl}/>
          <div >
             <p className="host-details">{this.props.firstname} {this.props.lastname}</p>
             <img className="profile-icon" src="https://s3.amazonaws.com/travelnhost/icons/profile-gray1-01.svg"/>
             <p className="host-details age-gender">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.gender}, {this.props.age}</p>
             <p className="accepting-guests">Accepting guests</p>
          </div>

        </div>
      </li>
    );

  }

}

export default withRouter(HostIndexItem);
