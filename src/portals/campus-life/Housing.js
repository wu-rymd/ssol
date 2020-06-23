import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Housing extends Component {
    render() {
        return (
            <div id="housing">
              <div className="portal-header">
                <h1> Housing </h1>
                <Button compact color="orange"
                        size="big"
                        content="Create/view tickets" />
              </div>

              <div className="portal-content">
                <List celled>
                  <List.Item>
                    <List.Content>
                      <b>Your dorm</b>
                      <span className="campus-life-info">ABC</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Your room</b>
                      <span className="campus-life-info">12A</span>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </div>
        );
    }
}

export default Housing;
