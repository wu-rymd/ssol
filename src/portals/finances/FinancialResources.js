import React, { Component } from 'react';
import { Button, Placeholder } from 'semantic-ui-react';

class FinancialResources extends Component {
    render() {
        return (
            <div id="financial-resources">
              <div className="portal-header">
                <h1> Financial Resources </h1>
                <Button compact color="blue">Contact <abbr title="Student Financial Services">SFS</abbr>
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

export default FinancialResources;
