import React, { Component } from 'react';

class SearchRefine extends Component {

    render() {
        return(
            <div className="formItem">
                <h5 className="center-align">REFINE YOUR SEARCH</h5>
                <h6 className="center-align">Speciality</h6>
                <div className="input-field selectItem">
                    <select name="spec-select" id="spec-select">
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
            </div>
        )
    }
}

export default SearchRefine;
