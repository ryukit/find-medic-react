import React, { Component } from 'react';
import DoctorShortBox from './DoctorShortBox';

class DoctorOverview extends Component {


    render() {
        const overviewContent = this.props.item.map(function (item) {
            return <p>{item.overview}</p>
        }.bind(this));

        const overviewShortBox = this.props.item.map(function (item) {
            return <DoctorShortBox
                key={item.key}
                exp={item.experience}
                reg_referal={item.reg_referal}
                online_consultation={item.online_consultation}
                min_price_per_appointment={item.min_price_per_appointment}
             />
        }.bind(this));

        return(
            <div className="overviewBlock" id="overview-block">
                <div className="row">
                    <div className="col s12 m8">
                        <h5>Overview</h5>
                        {overviewContent}
                    </div>
                    <div className="col s12 m4">
                        {overviewShortBox}
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorOverview;
