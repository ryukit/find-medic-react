import React, { Component } from 'react';
import RateComponent from '../../components/rateing';
import {
    Link
} from 'react-router-dom';

class DoctorItem extends Component {

    render() {
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
                <RateComponent rate={this.props.rate} />
            </div>
        )
    }
}

export default DoctorItem;
