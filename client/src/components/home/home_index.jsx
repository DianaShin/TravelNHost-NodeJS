import React from 'react';
import HomeIndexItem from './home_index_item'
import './home_index.scss';

class HomeIndex extends React.Component {
  componentWillMount() {
    this.props.getDestinations();
  }

  render() {
    const { destinations, loading } = this.props;
    let dests = destinations.map(destination => {
      return <HomeIndexItem
                name={destination.name}
                currentUser={this.props.currentUser}
                key={destination.id}
                lat={destination.lat}
                destination={destination}
                image_url={destination.image_url}/>
    })
    return (
      !loading && (
        <section className="home-index">
          <div className="destinations-index">
            <ul className="destinations-row-1 destinations-row">
                {dests.slice(0,3)}
            </ul>
            <ul className="destinations-row-2 destinations-row">
                {dests.slice(3, 7)}
            </ul>
            <ul className="destinations-row-3 destinations-row">
              {dests.slice(7, 10)}
            </ul>
            <ul className="destinations-row-4 destinations-row">
              {dests.slice(10, 14)}
            </ul>
            <ul className="destinations-row-5 destinations-row">
              {dests.slice(14, 17)}
            </ul>
          </div>
        </section>
      )
    )
  }
}

export default HomeIndex;
