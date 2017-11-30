import React, { Component } from 'react';
import {Input, Toast, Row, Col, Parallax, Table} from 'react-materialize'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            dateOrganizer : ''
        }
        this.dateOrganizerChange = this.dateOrganizerChange.bind(this)
    }

    dateOrganizerChange(event){
        this.setState({dateOrganizer: event.target.value})
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <Row>
                            <h1>Home</h1>
                        </Row>
                        <Row>
                            <Col s={4}>
                                <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </Col>

                            <Col s={4}>
                                <Input name='on' type='date' label="Materialize Organizer" onChange={this.dateOrganizerChange} />
                                <Toast className="top" toast={this.state.dateOrganizer || 'Please select a date!'}>
                                    Toast Date
                                </Toast>
                            </Col>

                        </Row>
                        <Row>
                            <div className="section">
                                <h2 className="header">Parallax</h2>
                                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                            </div>
                            <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                        </Row>
                        <Row>
                            <Table>
                                <thead>
                                <tr>
                                    <th data-field="id">Name</th>
                                    <th data-field="name">Item Name</th>
                                    <th data-field="price">Item Price</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
