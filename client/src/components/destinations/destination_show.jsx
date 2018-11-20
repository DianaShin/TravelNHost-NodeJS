import React from 'react';
import './destination_show.scss';
import DestinationMap from './destination_map';
/* eslint-disable no-undef */
class DestinationShow extends React.Component {
  componentDidMount() {
    this.props.getDestination(this.props.match.params.destinationName);
    this.props.getHosts(this.props.match.params.destinationName);
    window.scrollTo(0,0);
  }

  render() {
    console.log(this.props);
    const { destination } = this.props;

    return (
      <main>
        <h1 className="destination-show-name">{destination.name}</h1>
        <h1 className="destination-show-country">{destination.country}</h1>
        <img alt={destination.name} src={destination.hero_url} className="destination-cover-image"/>
        <DestinationMap
          destination={destination}
          lat={destination.lat}
          long={destination.long}
        />
        <div className="hosts-index">
          <p>Hosts Index goes here!</p>
        </div>
      </main>
    );
  }
}

export default DestinationShow;
