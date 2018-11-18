import React from 'react';
import { withRouter } from 'react-router';
import './home_index_item.scss';

class HomeIndexItem extends React.Component {
  handleClick = () => {
    if (this.props.currentUser === null) {
      return this.props.history.push('/login');
    } else {
      return this.props.history.push(`/destinations/${this.props.destination.name}`);
    }
  }
  render() {
    const { name, image_url } = this.props;
    return (
      <li onClick={this.handleClick} id={name} className='parent'>
        <p className="destination-name">{name}</p>
        <img className="destination" src={image_url} alt={name}/>
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);
