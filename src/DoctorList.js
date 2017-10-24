import React, { Component } from 'react';
import DoctorItem from './DoctorItem';

class DoctorList extends Component {

    render() {
        const doctorItem = this.props.items.map(function (item) {
            return <DoctorItem
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
            <section className="doctorList">
                {doctorItem}
            </section>
        )
    }
}

export default DoctorList;
