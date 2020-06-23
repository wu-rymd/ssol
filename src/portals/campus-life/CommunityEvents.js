import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';

class CommunityEvents extends Component {
    render() {
        return (
            <div id="community-events">
              <h1> Community Events </h1>

              <div className="portal-content">
                <Feed>
                  <Feed.Event image="/placeholders/aisha/mary.jpg"
                              date="3 days ago"
                              summary="Student Organization ABC is hosting an event somewhere!" />
                  <Feed.Event image="/placeholders/aisha/james.jpg"
                              date="5 days ago"
                              summary="Student Organization BCD is hosting an event somewhere!" />
                  <Feed.Event image="/placeholders/matthew.png"
                              date="6 days ago"
                              summary="Student Organization DEF is hosting an event somewhere!" />
                  <Feed.Event image="/placeholders/aisha/mary.jpg"
                              date="1 week ago"
                              summary="Student Organization FHJ is hosting an event somewhere!" />
                </Feed>
              </div>
            </div>
        );
    }
}

export default CommunityEvents;
