/* eslint-disable no-undef */
export default class MarkerManager {
  constructor(map, infowindow, handleClick) {
    this.map = map;
    this.markers = {};
    this.infowindow = infowindow;
  }

  updateMarkers(hosts) {
    let image = 'https://s3.amazonaws.com/travelnhost/icons/Pindrop3.png';
    const google = window.google;

    Object.keys(hosts).forEach( (key) => {
      let latLng = { lat: hosts[key].lat, lng: hosts[key].lng};
      let contentString = `${hosts[key].firstName} ${hosts[key].lastName}`;

      let infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: image
      });

      marker.addListener('mouseover', function () {
      infowindow.close();
      infowindow.setContent(contentString);
      infowindow.open(marker.map, marker);
      });

      marker.addListener('mouseout', function () {
      infowindow.close();
      });
    });
  }
}
