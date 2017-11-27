import React, { Component } from 'react';

class DoctorInterests extends Component {


    render() {
        const interestsContent = this.props.item.map(function (item) {
            let interest_value = item.special_interests.split(";");
            return interest_value.map(function (val) {
                return <li>{val}</li>
            }.bind(this));
        }.bind(this));

        return(
            <div className="overviewBlock" id="overview-block">
                <div className="row">
                    <div className="col s12">
                        <h5>Special Interests</h5>
                        <ul className="interestList">
                            {interestsContent}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorInterests;
