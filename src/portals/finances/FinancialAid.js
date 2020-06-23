import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class FinancialAid extends Component {
    render() {
        return (
            <div id="financial-aid">
              <div className="portal-content">
                <h1>Financial Aid & Scholarship</h1>
                
                <List celled>
                  <List.Item>
                    <List.Content>
                      <b>Tuition and fees</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Room and meals</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Books and supplies</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Transportation</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Other educatational costs</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                </List>

                <div className="aid-highlight">
                  <b>Estimated Cost of Attendance</b>
                  <b className="aid-amount">$12,345/yr</b>
                </div>

                <List celled>
                  <List.Item>
                    <List.Content>
                      <b>Grants from Columbia</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Federal grants (Pell, SEOG)</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Grants from your state</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <b>Outside scholarships</b>
                      <span className="aid-amount">$12,345</span>
                    </List.Content>
                  </List.Item>
                </List>

                <div className="aid-highlight">
                  <b>Total Grants and Scholarships</b>
                  <b className="aid-amount">$12,345/yr</b>
                </div>

                <div className="aid-net">
                  <b>Net Costs</b>
                  <b className="aid-amount">$12,345/yr</b>
                </div>
                  
                </div>
              </div>
        );
    }
}

export default FinancialAid;
