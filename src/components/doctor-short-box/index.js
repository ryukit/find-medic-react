import React from 'react';

const DoctorShortBox = (props) => {
    return(
        <div className="collection">
            <a href="#!" className="collection-item">
                <span className="badge">{props.exp}</span>Experience
            </a>
            <a href="#!" className="collection-item">
                <span className="badge">{props.reg_referal}</span>Regular referal
            </a>
            <a href="#!" className="collection-item">
                <span className="badge">{props.online_consultation}</span>Online Consultation
            </a>
            <a href="#!" className="collection-item">
                <span className="badge">{props.min_price_per_appointment}</span>min_price_pre_appointment
            </a>
        </div>
    )
}

export default DoctorShortBox;
