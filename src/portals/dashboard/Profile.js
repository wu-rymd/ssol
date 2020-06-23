import React, { Component } from 'react';
import { Feed, List } from 'semantic-ui-react';

class Profile extends Component {
    render() {
        return (
            <div id="profile">
              
              <h1>Profile</h1>          
              <div id="user-info">
                <img src="/placeholders/aisha/patricia.jpg" alt="Profile" />
                <div id="bio">
                  <b>Your Name</b>
                  <div>B.x. Some major</div>
                  <div>Class of 20xx</div>
                  <br />
                  <div><abbr title="University Network ID">UNI: </abbr>abc1234</div>
                  <div><abbr title="Columbia Student ID">CID: </abbr>C012345678</div>
                </div>
              </div>
              <br />

              <h1>Classes</h1>
              <div id="class-list">
                <List celled>
                  <List.Item className="class">
                    <List.Content>
                      <List.Header>AMPA E2000</List.Header>
                      Multivariable Calculus for Engineers
                    </List.Content>
                  </List.Item>
                  <List.Item className="class">
                    <List.Content>
                      <List.Header>COMS W3251</List.Header>
                      Advanced Programming
                    </List.Content>
                  </List.Item>
                  <List.Item className="class">
                    <List.Content>
                      <List.Header>COMS W3157</List.Header>
                      Computational Linear Algebra
                    </List.Content>
                  </List.Item>
                </List>
              </div>
              <br />

              <h1>Notifications</h1>
              <Feed>
                <Feed.Event image="/placeholders/aisha/james.jpg"
                            date="3 days ago"
                            summary="Some Advisor sent you a form" />
                <Feed.Event image="/placeholders/aisha/patricia.jpg"
                            date="5 days ago"
                            summary="Some Instructor enrolled you into AMPA E2000" />
                <Feed.Event image="/placeholders/aisha/mary.jpg"
                            date="6 days ago"
                            summary="Your housing deposit was received" />
                <Feed.Event image="/placeholders/matthew.png"
                            date="1 week ago"
                            summary="You updated your dining plan" />
              </Feed>
            </div>
        );
    }
}

export default Profile;
