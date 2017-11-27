import React, { Component } from 'react';

class DoctorLanguage extends Component {


    render() {
        const languageContent = this.props.item.map(lang => lang.languages);
        // const languageContent = this.props.item.map(function (item) {
        //     let interest_value = item.special_interests.split(";");
        //     console.log(interest_value);
        //     return interest_value.map(function (val) {
        //         return <li>{val}</li>
        //     }.bind(this));
        // }.bind(this));

        return(
            <div className="overviewBlock" id="overview-block">
                <div className="row">
                    <div className="col s12">
                        <h5>Spoken Languages</h5>
                        <p>
                            {languageContent}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorLanguage;
