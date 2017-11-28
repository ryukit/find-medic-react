import React, { Component } from 'react';

class DoctorShortBox extends Component {


    render() {
        // const overviewContent = this.props.item.map(function (item) {
        //     return <p>{item.overview}</p>
        // }.bind(this));

        return(
            <div className="collection">
                <a href="#!" className="collection-item">
                    <span className="badge">{this.props.exp}</span>Experience
                </a>
                <a href="#!" className="collection-item">
                    <span className="badge">{this.props.reg_referal}</span>Regular referal
                </a>
                <a href="#!" className="collection-item">
                    <span className="badge">{this.props.online_consultation}</span>Online Consultation
                </a>
                <a href="#!" className="collection-item">
                    <span className="badge">{this.props.min_price_per_appointment}</span>min_price_pre_appointment
                </a>
            </div>
        )
    }
}

export default DoctorShortBox;
