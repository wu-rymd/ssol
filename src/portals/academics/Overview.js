import React, { Component } from 'react';
import { Button, Image, List, Popup } from 'semantic-ui-react';

class Overview extends Component {
    render() {
        return (
            <div id="overview">
              
              <h1>Overview</h1>          
              <div id="user-info">
                <img src="/placeholders/aisha/patricia.jpg" alt="Profile" />
                <div id="bio">
                  <b>Your Name</b>
                  <div>B.x. Some major</div>
                  <br />
                  <div>
                    <abbr title="University Network ID">UNI: </abbr>abc1234
                  </div>
                  <div>
                    <abbr title="Columbia Student ID">CID: </abbr>C012345678
                  </div>
                </div>
              </div>
              <br />

              <h2>Advising Network</h2>
              <List celled>
                <List.Item>
                  <List.Content>
                    <b>Academic Advisor</b>
                    <Popup content='Opens new email to advisor'
                           trigger={
                               <span className="advisor">
                                 <Image src='/placeholders/aisha/james.jpg' avatar />
                                 <span>Some Guy </span>
                               </span>
                           } />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <b>Major Advisor</b>
                    <Popup content='Opens new email to advisor'
                           trigger={
                               <span className="advisor">
                                 <Image src='/placeholders/aisha/mary.jpg' avatar />
                                 <span>Some Gal</span>
                               </span>
                           } />
                  </List.Content>
                </List.Item>
              </List>
              <br />

              <h2>Academic Standing</h2>
              <List celled>
                <List.Item>
                  <List.Content>
                    <b>Career</b>
                    <span id="career">Undergraduate</span>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <b>Current Level</b>
                    <span id="grade-level">Sophomore</span>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <b>Expected Grad. Term</b>
                    <span id="graduation-term">Spring 20xx</span>
                  </List.Content>
                </List.Item>
              </List>
              <Button color="grey" compact disabled fluid>Apply to graduate</Button>
              <br />

              <h2>GPA</h2>
              <span>Cumulative GPA </span>
              <span id="cumulative-gpa">9.999</span>
              <List celled>
                <List.Item className="term">
                  <List.Content>
                    <b>Fall 20xx</b>
                    <span className="term-gpa">
                      <em>Term GPA: </em>9.999
                    </span>
                  </List.Content>
                </List.Item>
                <List.Item className="term">
                  <List.Content>
                    <b>Spring 20xx</b>
                    <span className="term-gpa">
                      <em>Term GPA: </em>9.999
                    </span>
                  </List.Content>
                </List.Item>
                <List.Item className="term">
                  <List.Content>
                    <b>Fall 20xx</b>
                    <span className="term-gpa">
                      <em>Term GPA: </em>9.999
                    </span>
                  </List.Content>
                </List.Item>
              </List>
              <Button color="grey" compact fluid>Request transcript</Button>
            </div>
        );
    }
}

export default Overview;
