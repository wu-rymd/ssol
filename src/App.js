import React, { Component } from 'react';
import Navbar from './Navbar';
import Dashboard from './portals/Dashboard';
import Academics from './portals/Academics';
import Finances from './portals/Finances';
import CampusLife from './portals/CampusLife';
import Logout from './Logout';

const DASHBOARD   = (<Dashboard />);
const ACADEMICS   = (<Academics />);
const FINANCES    = (<Finances />);
const CAMPUS_LIFE = (<CampusLife />);
const LOGOUT      = (<Logout />);

class App extends Component {
    state = { currentPortal : DASHBOARD }  // TODO revert to DASHBOARD

    handlePortalChange = (portal) => {
        /* console.log("show portal:", portal); */
        switch(portal) {
            case "dashboard":
                this.setState({ currentPortal : DASHBOARD });
                break;
            case "academics":
                this.setState({ currentPortal : ACADEMICS });
                break;
            case "finances":
                this.setState({ currentPortal : FINANCES });
                break;
            case "campusLife":
                this.setState({ currentPortal : CAMPUS_LIFE });
                break;
            case "logout":
                this.setState({ currentPortal : LOGOUT });
                break;
            default:
                console.warn("Portal not found! Defaulting to dashboard...");
                this.setState({ currentPortal : DASHBOARD });
                break;
        }
    }
    
    render() {
        return (
            <div className="App">
              <Navbar portalChange={this.handlePortalChange} />
              {this.state.currentPortal}
            </div>
        );
    }
}

export default App;
