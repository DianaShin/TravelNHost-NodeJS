import React from 'react';
import { withRouter } from 'react-router-dom';
import HostIndexItem from './host_index_item';

class HostsIndex extends React.Component {
  componentWillMount() {
    this.props.getHosts(this.props.match.params.destinationName);
  }

  render() {
    const hosts = Object.keys(this.props.hosts).map(id => this.props.hosts[id]);
    console.log(this.props.hosts);
    let hostItems = hosts.map((host) => {
      return <HostIndexItem
                key={host._id}
                id={host._id}
                destination={this.props.match.params.destinationName}
                firstname={host.firstName}
                lastname={host.lastName}
                age={host.age}
                gender={host.gender}
                imageUrl={host.imgUrl}
                />;
    });
    if (hostItems.length) return (
      <ul>
        {hostItems}
      </ul>
    )
    return null;
  }
}

export default withRouter(HostsIndex);
