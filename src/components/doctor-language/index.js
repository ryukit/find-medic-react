import React from 'react';

const DoctorLanguage = (props) => {
    const languageContent = props.item.map(lang => lang.languages);

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

export default DoctorLanguage;
