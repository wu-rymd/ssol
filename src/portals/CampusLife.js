import React, { Component } from 'react';
import Housing from './campus-life/Housing';
import DiningPlan from './campus-life/DiningPlan';
import CampusLifeResources from './campus-life/CampusLifeResources';
import CommunityEvents from './campus-life/CommunityEvents';

class CampusLife extends Component {
    render() {
        return (
            <div id="campus-life">
              <Housing />
              <DiningPlan />
              <CampusLifeResources />
              <CommunityEvents />
            </div>
        );
    }
}

export default CampusLife;
