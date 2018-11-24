import React from 'react';
import './destination_show.scss';
import DestinationMap from './destination_map';
import HostsIndex from '../hosts/hosts_index_container';

/* eslint-disable no-undef */
class DestinationShow extends React.Component {
  componentDidMount() {
    this.props.getDestination(this.props.match.params.destinationName);
    this.props.getHosts(this.props.match.params.destinationName);
    window.scrollTo(0,0);
  }

  render() {
    const { destination, hosts } = this.props;

    return (
      <main>
        <h1 className="destination-show-name">{destination.name}</h1>
        <h1 className="destination-show-country">{destination.country}</h1>
        <img alt={destination.name} src={destination.hero_url} className="destination-cover-image"/>
        <DestinationMap
          destination={destination}
          lat={destination.lat}
          long={destination.long}
          hosts={hosts}
        />
        <div className="hosts-index">
          <HostsIndex />
        </div>
      </main>
    );
  }
}

export default DestinationShow;
