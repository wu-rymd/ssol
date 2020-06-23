import React, { Component } from 'react';
import Profile from './dashboard/Profile';
import QuickAccess from './dashboard/QuickAccess';

class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">
              <Profile />
              <div className="portal">
                <QuickAccess />
              </div>
            </div>
        );
    }
}

export default Dashboard;
