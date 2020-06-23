import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class DiningPlan extends Component {
    render() {
        return (
            <div id="dining-plan">
              <div className="portal-header">
                <h1> Dining Plan </h1>
                <Button compact color="grey">Add Dining Dollars/Flex</Button>
              </div>

              <div className="portal-content">
                <List celled>
                  <List.Item>
                    <List.Content>
                      <b>Meals left</b>
                      <span className="campus-life-info">123</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Dining Dollars</b>
                      <span className="campus-life-info">$123</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Flex Dollars</b>
                      <span className="campus-life-info">$123</span>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </div>
        );
    }
}

export default DiningPlan;
