import React from 'react';
import { connect } from 'react-redux';
import HostsIndex from './hosts_index';
import { getHosts } from '../../actions/hosts/index';

const mapStateToProps = (state, ownProps) => {
  return {
    hosts: state.hosts.hosts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHosts: (destinationName) => dispatch(getHosts(destinationName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostsIndex);
