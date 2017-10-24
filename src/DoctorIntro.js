import React, { Component } from 'react';

class DoctorIntro extends Component {

    render() {

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
                            <p>Location: {this.props.location.city}</p>
                            <p>Speciality: {this.props.speciality}</p>
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
