import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class OnCampusEmployment extends Component {
    render() {
        return (
            <div id="on-campus-employment">
              <div className="portal-header">
                <h1> On-Campus Employment </h1>
                <Button compact color="blue">Contact <abbr title="Center for Career Education">CCE</abbr>
                </Button>
              </div>

              <div className="portal-content">
                <List celled>
                  <List.Item>
                    <List.Content>
                      A job listing here
                      <Button className="on-campus-empoly-apply"
                              size="small"
                              content="Apply" compact />
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      A job listing here
                      <Button className="on-campus-empoly-apply"
                              size="small"
                              content="Apply" compact />
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      A job listing here
                      <Button className="on-campus-empoly-apply"
                              size="small"
                              content="Apply" compact />
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      A job listing here
                      <Button className="on-campus-empoly-apply"
                              size="small"
                              content="Apply" compact />
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      A job listing here
                      <Button className="on-campus-empoly-apply"
                              size="small"
                              content="Apply" compact />
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </div>
        );
    }
}

export default OnCampusEmployment;
