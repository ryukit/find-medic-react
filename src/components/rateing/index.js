import React, { Component } from 'react';

class RateComponent extends Component {

    render() {
        let stars_val = '';
        if (this.props.rate === 0) {
            stars_val = 'star_border star_border star_border star_border star_border'
        } else if (this.props.rate >= 0.5 && this.props.rate < 1) {
            stars_val = 'star_half star_border star_border star_border star_border'
        } else if (this.props.rate >= 1 && this.props.rate < 1.5) {
            stars_val = 'star star_border star_border star_border star_border'
        } else if (this.props.rate >= 1.5 && this.props.rate < 2) {
            stars_val = 'star star_half star_border star_border star_border'
        } else if (this.props.rate >= 2 && this.props.rate < 2.5) {
            stars_val = 'star star star_border star_border star_border'
        } else if (this.props.rate >= 2.5 && this.props.rate < 3) {
            stars_val = 'star star star_half star_border star_border'
        } else if (this.props.rate >= 3 && this.props.rate < 3.5) {
            stars_val = 'star star star star_border star_border'
        } else if (this.props.rate >= 3.5 && this.props.rate < 4) {
            stars_val = 'star star star star_half star_border'
        } else if (this.props.rate >= 4 && this.props.rate < 4.5) {
            stars_val = 'star star star star star_border'
        } else if (this.props.rate >= 4.5 && this.props.rate < 5) {
            stars_val = 'star star star star star_half'
        } else if (this.props.rate === 5) {
            stars_val = 'star star star star star'
        }

        return(
            <div className="doctorList-item-rate">
                <span>{this.props.rate}</span>
                <i className="material-icons">{stars_val}</i>
            </div>
        )
    }
}

export default RateComponent;
