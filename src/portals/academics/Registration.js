import React, { Component } from 'react';
import { Button, Icon, Popup, Table } from 'semantic-ui-react';

class Registration extends Component {
    render() {
        return (
            <div id="registration">
              <div className="portal-header">
                <h3>My Classes &mdash; <span>Fall 2020</span></h3>
                <Button compact color="blue">Go to Vergil</Button>
              </div>
              <div className="portal-content">
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Catalog No.</Table.HeaderCell>
                      <Table.HeaderCell>Class Name</Table.HeaderCell>
                      <Table.HeaderCell>Section No.</Table.HeaderCell>
                      <Table.HeaderCell>Call No.</Table.HeaderCell>
                      <Table.HeaderCell>Day/Time</Table.HeaderCell>
                      <Table.HeaderCell>Location</Table.HeaderCell>
                      <Table.HeaderCell>Instructor</Table.HeaderCell>
                      <Table.HeaderCell>Credits</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>AMPA E2000</Table.Cell>
                      <Table.Cell>Multivariable Calculus for Engineers</Table.Cell>
                      <Table.Cell>002</Table.Cell>
                      <Table.Cell>12592</Table.Cell>
                      <Table.Cell>
                        <abbr title="Tuesday">T</abbr>, <abbr title="Thursday">R</abbr> 1:10PM&ndash;2:25PM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Drew C Youngren</Table.Cell>
                      <Table.Cell>4</Table.Cell>
                      <Table.Cell>
                        <Popup content='Enrolled'
                               position='top right'
                               trigger={
                                   <Icon color='green' name='checkmark'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>PHYS W1201</Table.Cell>
                      <Table.Cell>General Physics I</Table.Cell>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>13409</Table.Cell>
                      <Table.Cell>
                        <abbr title="Monday">M</abbr>, <abbr title="Wednesday">W</abbr> 10:10AM&ndash;11:25AM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Michael H Shaevitz</Table.Cell>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell>
                        <Popup content='Not enrolled in required laboratory section'
                               position='top right'
                               trigger={
                                   <Icon color='red' name='exclamation circle'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>COMS W3157</Table.Cell>
                      <Table.Cell>Advanced Programming</Table.Cell>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>10067</Table.Cell>
                      <Table.Cell>
                        <abbr title="Tuesday">T</abbr>, <abbr title="Thursday">R</abbr> 4:10PM&ndash;5:25PM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Jae W Lee</Table.Cell>
                      <Table.Cell>4</Table.Cell>
                      <Table.Cell>
                        <Popup content='On waitlist'
                               position='top right'
                               trigger={
                                   <Icon color='yellow' name='wait'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>COMS W3251</Table.Cell>
                      <Table.Cell>Computational Linear Algebra</Table.Cell>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>10068</Table.Cell>
                      <Table.Cell>
                        <abbr title="Tuesday">T</abbr>, <abbr title="Thursday">R</abbr> 2:40PM&ndash;3:55PM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Tony B Dear</Table.Cell>
                      <Table.Cell>4</Table.Cell>
                      <Table.Cell>
                        <Popup content='Enrolled'
                               position='top right'
                               trigger={
                                   <Icon color='green' name='checkmark'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row error>
                      <Table.Cell>EXMP E1234</Table.Cell>
                      <Table.Cell>Some Time Conflict</Table.Cell>
                      <Table.Cell>001</Table.Cell>
                      <Table.Cell>99999</Table.Cell>
                      <Table.Cell>
                        <abbr title="Tuesday">T</abbr>, <abbr title="Thursday">R</abbr> 7:00PM&ndash;8:00PM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Some Example</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>
                        <Popup content='Time conflict with EXMP W4567'
                               position='top right'
                               trigger={
                                   <Icon color='red' name='exclamation circle'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row error>
                      <Table.Cell>EXMP W4567</Table.Cell>
                      <Table.Cell>Some Time Conflict 2</Table.Cell>
                      <Table.Cell>002</Table.Cell>
                      <Table.Cell>99991</Table.Cell>
                      <Table.Cell>
                        <abbr title="Tuesday">T</abbr>, <abbr title="Thursday">R</abbr> 7:00PM&ndash;8:00PM
                      </Table.Cell>
                      <Table.Cell>TBA</Table.Cell>
                      <Table.Cell>Some Example</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>
                        <Popup content='Time conflict with EXMP E1234'
                               position='top right'
                               trigger={
                                   <Icon color='red' name='exclamation circle'
                                                size='big' />
                               } />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
            </div>
        );
    }
}

export default Registration;
