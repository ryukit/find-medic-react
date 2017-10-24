import React, { Component } from 'react';
import $ from "jquery";

class SearchRefine extends Component {

    componentDidMount() {
        console.log(this.refs.selectContainer);
        //debugger;
        // this.$node = $(this.refs.selectContainer);
        // this.$node.material_select();
        //$(this.refs.selectContainer).material_select();
    }


    render() {
        return(
            <div className="formItem">
                <h5 className="center-align">REFINE YOUR SEARCH</h5>
                <h6 className="center-align">Speciality</h6>
                <div className="input-field selectItem">
                    <select ref="selectContainer" name="spec-select" id="spec-select">
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="GP">GP</option>
                        <option value="Mental Health">Mental Health</option>
                    </select>
                </div>
                <h6 className="center-align">Type</h6>
                <div>
                    <p>
                        <input type="checkbox" className="filled-in" id="filled-in-box-1" />
                        <label htmlFor="filled-in-box-1">Doctor</label>
                    </p>
                    <p>
                        <input type="checkbox" className="filled-in" id="filled-in-box-2" />
                        <label htmlFor="filled-in-box-2">Clinic</label>
                    </p>
                </div>
                <h6 className="center-align">Doctor's gender</h6>
                <div>
                    <p>
                        <input type="checkbox" className="filled-in" id="filled-in-box-3" />
                        <label htmlFor="filled-in-box-3">Male</label>
                    </p>
                    <p>
                        <input type="checkbox" className="filled-in" id="filled-in-box-4" />
                        <label htmlFor="filled-in-box-4">Female</label>
                    </p>
                </div>
                <div className="formActions">
                    <a className="waves-effect waves-light btn">button</a>
                </div>
            </div>
        )
    }
}

export default SearchRefine;
