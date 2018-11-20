import React from 'react';
import { connect } from 'react-redux';
import DestinationMap from './destination_map';

const mapStateToProps = state => ({
//  hosts: Object.keys(state.entities.hosts).map(id => state.entities.hosts[id])
});

export default connect(mapStateToProps, null)(DestinationMap);
