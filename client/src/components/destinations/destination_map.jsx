/* eslint-disable no-undef */
import React from 'react';
import MarkerManager from '../../utils/marker_manager';
import { Link, withRouter } from 'react-router';
import './destination_map.scss';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class DestinationMap extends React.Component {
  componentWillReceiveProps(newProps) {
    if (newProps.destination) {
      const lat = newProps.destination.lat;
      const lng = newProps.destination.long;
      const mapOptions = {
        center: { lat, lng },
        zoom: 11
      }
      // wrap the mapDOMNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
  //    this.MarkerManager = new MarkerManager(this.map);

      this._registerListeners();

  //    this.MarkerManager.updateMarkers(newProps.hosts);
    }
  }

  componentDidUpdate() {
  //  this.MarkerManager.updateMarkers(this.props.hosts);
}

  _registerListeners() {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
      </div>
    );
  }

}

export default DestinationMap;
