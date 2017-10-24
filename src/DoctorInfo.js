import React, { Component } from 'react';
import DoctorIntro from './DoctorIntro';
import DoctorInnerMap from './DoctorInnerMap';

class DoctorInfo extends Component {

    render() {
        const doctorIntro = this.props.item.map(function (item) {
            return <DoctorIntro
                key={item.key}
                id={item.id}
                name={item.name}
                desc={item.description}
                rate={item.rate}
                sex={item.sex}
                type={item.type}
                location={item.geo_point}
                speciality={item.speciality}
                image={item.featured_image}
            />
        }.bind(this));

        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {doctorIntro}
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <div id="mapInner">
                            <DoctorInnerMap item={this.props.item} />
                        </div>
                    </div>
                    <div className="col s12 m4">
                        doctor info
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorInfo;
