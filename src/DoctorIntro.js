import React, { Component } from 'react';
import DoctorIntroInfo from './DoctorIntroInfo';

class DoctorIntro extends Component {

    render() {
        const doctorIntro = this.props.item.map(function (item) {
            return <DoctorIntroInfo
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
            <main className="mainContent pageInner">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {doctorIntro}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            sidebar
                        </div>
                        <div className="col s12 m4">
                            doctor info
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default DoctorIntro;
