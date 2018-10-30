import React from 'react';
import HomeIndex from './home_index_container';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <main>
        <section id="home-splash-img">
            <section className="home-splash-layer">
              <h2>MEET LOCALS. TRAVEL THE WORLD.</h2>
              <h2>BE HOSPITABLE.</h2>
            </section>
          </section>

          <section className="how-it-works">
        <h3>HOW IT WORKS</h3>
         <ul className="how-it-works-list">
           <li className="discover-people-box">
             <img className="people-icon"
                  src="http://res.cloudinary.com/ayoung0131/image/upload/v1514942941/People-icon_iwpt7o.svg"
                  alt="People-Icon"/>
             <h4 className="how-it-works-item-title">DISCOVER AMAZING PEOPLE</h4>
             <div className="short-break-line">
             </div>
             <p>Members of the TravelNHost community open their homes
                and share their lives. Connect and be inspired. </p>
           </li>

           <li className="find-a-host-box">
             <img className="couch-icon"
                  src="http://res.cloudinary.com/ayoung0131/image/upload/v1514943080/couch_d01gkl.svg"
                  alt="Couch-Icon"/>
           <h4 className="how-it-works-item-title">FIND A HOST</h4>
             <div className="short-break-line">
             </div>
             <p>Connect with hosts, and confirm your stay
                  through the TravelNHost platform.
                  Your stay with hosts is free.</p>
           </li>
         </ul>
         </section>

         <HomeIndex />
      </main>
    );
  }
}


export default Home;
