import React, { Component } from 'react';
import { Button, Icon, Placeholder } from 'semantic-ui-react';

class QuickAccess extends Component {
    render() {
        return (
            <div id="quick-access">
              <h1>Quick Access</h1>

              <div className="portal-header">
                <h3>Classes</h3>
                <Button icon color="yellow" className="unstar" size="mini">
                  <Icon name='star' />
                </Button>
              </div>

              <div className="portal-content">
                <Placeholder className="placeholder">
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </div>
              
              <div className="portal-header">
                <h3>Bill</h3>
                <Button icon color="yellow" className="unstar" size="mini">
                  <Icon name='star' />
                </Button>
              </div>

              <div className="portal-content">
                <Placeholder className="placeholder">
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </div>
              
              <div className="portal-header">
                <h3>Transcript</h3>
                <Button icon color="yellow" className="unstar" size="mini">
                  <Icon name='star' />
                </Button>
              </div>

              <div className="portal-content">
                <Placeholder className="placeholder">
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </div>
              
              <div className="portal-header">
                <h3>Dining</h3>
                <Button icon color="yellow" className="unstar" size="mini">
                  <Icon name='star' />
                </Button>
              </div>

              <div className="portal-content">
                <Placeholder className="placeholder">
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </div>
              
              <div className="portal-header">
                <h3>Housing</h3>
                <Button icon color="yellow" className="unstar" size="mini">
                  <Icon name='star' />
                </Button>
              </div>

              <div className="portal-content">
                <Placeholder className="placeholder">
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </div>
            </div>
        );
    }
}

export default QuickAccess;
