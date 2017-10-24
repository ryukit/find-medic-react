import React, { Component } from 'react';
//import PageInner from './PageInner';
import {
    Link
} from 'react-router-dom';

class DoctorItem extends Component {

    render() {
        let stars_val = '';
        if (this.props.rate === 0) {
            stars_val = 'star_border star_border star_border star_border star_border'
        } else if (this.props.rate >= 0.5 && this.props.rate < 1) {
            stars_val = 'star_half star_border star_border star_border star_border'
        } else if (this.props.rate >= 1 && this.props.rate < 1.5) {
            stars_val = 'star star_border star_border star_border star_border'
        } else if (this.props.rate >= 1.5 && this.props.rate < 2) {
            stars_val = 'star star_half star_border star_border star_border'
        } else if (this.props.rate >= 2 && this.props.rate < 2.5) {
            stars_val = 'star star star_border star_border star_border'
        } else if (this.props.rate >= 2.5 && this.props.rate < 3) {
            stars_val = 'star star star_half star_border star_border'
        } else if (this.props.rate >= 3 && this.props.rate < 3.5) {
            stars_val = 'star star star star_border star_border'
        } else if (this.props.rate >= 3.5 && this.props.rate < 4) {
            stars_val = 'star star star star_half star_border'
        } else if (this.props.rate >= 4 && this.props.rate < 4.5) {
            stars_val = 'star star star star star_border'
        } else if (this.props.rate >= 4.5 && this.props.rate < 5) {
            stars_val = 'star star star star star_half'
        } else if (this.props.rate === 5) {
            stars_val = 'star star star star star'
        }

        let doctor_item_type = '';
        if (this.props.type === 'doctor') {
            doctor_item_type = (<Link to={'/doctor/' + this.props.id}>Read More</Link>);
        } else if (this.props.type === 'clinic') {
            doctor_item_type = (<Link to={'/clinic/' + this.props.id}>Read More</Link>);
        }

        return(
            <div className="card doctorList-item">
                <div className="card-content">
                    <div className="row">
                        <div className="col s12 m4">
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
                <div className="card-action">
                    {doctor_item_type}
                    {/*<Route path={'/doctor/' + this.props.id} component={RenderPageInner} />*/}
                    {/*<Route path={'/doctor/' + this.props.id} render={() => <PageInner />} />*/}
                </div>
                <div className="doctorList-item-rate">
                    <span>{this.props.rate}</span>
                    <i className="material-icons">{stars_val}</i>
                </div>
            </div>
        )
    }
}

export default DoctorItem;
