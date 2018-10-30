import React from 'react';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image_url } = this.props;
    return (
      <li id={this.props.key} className='parent'>
        <p className="destination-name">{name}</p>
       <img className="destination" src={image_url} alt={name}/>
      </li>
    );
  }
}

export default HomeIndexItem;
