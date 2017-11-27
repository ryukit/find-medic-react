import React, { Component } from 'react';
import RateComponent from './components/rateing';

class DoctorIntro extends Component {
    constructor(props) {
        super(props);
        this.makeAppointment = this.makeAppointment.bind(this);
    }

    makeAppointment() {
        alert('good job');
    }

    render() {
        let registration = this.props.reg_number;
        let renderRegistration = '';
        if(registration) {
            renderRegistration = (<p>Registration Number: {this.props.reg_number}</p>)
        }
        return(
            <div className="card pageInner">
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 m2">
                            <div>
                                <img src={this.props.image} alt=""/>
                            </div>
                        </div>
                        <div className="col s12 m8">
                            <p className="card-title grey-text text-darken-4">{this.props.name}</p>
                            <p>{this.props.speciality}, {this.props.location.city}</p>
                            {renderRegistration}
                            <RateComponent rate={this.props.rate} />
                            <p><strong>Next available appointment</strong></p>
                            <div className="appointmentBlock">
                                <div className="appointmentBlock-item">
                                    <div className="chip appointmentBlock-item-time">
                                        <img src="http://placehold.it/20x20" alt="Contact Person" />
                                        Today 14:30
                                    </div>
                                    <div className="chip appointmentBlock-item-book" onClick={this.makeAppointment}>
                                        Book Now
                                        <i className="material-icons">event_available</i>
                                    </div>
                                </div>
                            </div>
                            {/*<p>{this.props.desc}</p>*/}
                            {/*<p>Sex: {this.props.sex}</p>*/}
                            {/*<p>LatLng: {this.props.location.lat}, {this.props.location.lng}</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorIntro;
