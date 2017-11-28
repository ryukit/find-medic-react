import React, { Component } from 'react';
import DoctorIntro from './DoctorIntro';
import DoctorInnerMap from './DoctorInnerMap';
import DoctorOverview from './DoctorOverview';
import DoctorInterests from './DoctorInterests';
import DoctorLanguage from './components/doctor-language';
import BookAppointment from './BookAppointment';

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
                reg_number={item.reg_number}
                location={item.geo_point}
                speciality={item.speciality}
                image={item.featured_image}
            />
        }.bind(this));

      const bookAppointment = this.props.item.map(function (item) {
        return <BookAppointment
            key={item.key}
            id={item.id}
            name={item.name}
            //desc={item.description}
            //rate={item.rate}
            //sex={item.sex}
            //type={item.type}
            //reg_number={item.reg_number}
            location={item.geo_point}
            //speciality={item.speciality}
            //image={item.featured_image}
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
                        <div id="bookAppointment">
                          {bookAppointment}
                        </div>
                    </div>
                    <div className="col s12 m8">
                        <div className="card">
                            <div className="card-content">
                                <DoctorOverview item={this.props.item} />
                                <DoctorInterests item={this.props.item} />
                                <DoctorLanguage item={this.props.item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorInfo;
