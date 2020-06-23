import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class BillSummary extends Component {
    render() {
        return (
            <div id="bill-summary">
              
              <h1>Bill Summary</h1>
              <h3>Due Now</h3>
              <div className="balance">$12,345.<sup>00</sup></div>
              <hr />

              <h3>Pending Balance</h3>
              <div className="balance">$12,345.<sup>00</sup></div>
              <h3>Pending Credit</h3>
              <div className="balance">$12,345.<sup>00</sup></div>
              <hr />

              <br />
              <Button color="grey" compact fluid>Make payment</Button> <br />
              <Button color="grey" compact fluid>Billing statement</Button>
            </div>
        );
    }
}

export default BillSummary;
