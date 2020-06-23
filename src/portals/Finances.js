import React, { Component } from 'react';
import BillSummary from './finances/BillSummary';
import FinancialAid from './finances/FinancialAid';
import FinancialResources from './finances/FinancialResources';
import OnCampusEmployment from './finances/OnCampusEmployment';

class Finances extends Component {
    render() {
        return (
            <div id="finances">
              <BillSummary />
              <div className="portal">
                <FinancialAid />
                <FinancialResources />
                <OnCampusEmployment />
              </div>
            </div>
        );
    }
}

export default Finances;
