import React, { Component } from 'react';
import Overview from './academics/Overview';
import Registration from './academics/Registration';
import Schedule from './academics/Schedule';

class Academics extends Component {
    render() {
        return (
            <div id="academics">
              <Overview />
              <div className="portal">
                <h1>Academics</h1>
                <Registration />
                <Schedule />
              </div>
            </div>
        );
    }
}

export default Academics;
