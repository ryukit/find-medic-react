import React from 'react';

const AdComponent = (props) => {
    return(
        <div className="bannerComponent">
            <img src={props.banner.banner_url} alt=""/>
        </div>
    )
}

export default AdComponent;
