import React from 'react';
import HomeIndexItem from './home_index_item'
import './home_index_item.scss';

class HomeIndex extends React.Component {
  componentWillMount() {
    this.props.getDestinations();
  }

  render() {
    const { destinations, loading } = this.props;
    console.log(destinations);
    let dests = destinations.map(destination => {
      return <HomeIndexItem name={destination.name} image_url={destination.image_url}/>
    })
    return (
      !loading && (
        <ul>
          { dests }
        </ul>
      )
    )
  }
}

export default HomeIndex;
