import React, { Component } from 'react';

class AdComponent extends Component {

    render() {
        //const banner_image = this.props.banner.banner_img;
        //console.log(this.props.banner.banner_img)
        return(
            <div className="bannerComponent">
                <img src={this.props.banner.banner_url} alt=""/>
            </div>
        )
    }
}

export default AdComponent;
