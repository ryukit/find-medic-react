import React, { Component } from 'react';
import { Input, Row, Col } from 'react-materialize';
import axios from 'axios';


class BookAppointment extends Component {
    constructor(props){
        super(props)
        this.state = {
            practice : '',
            location : '',
            timeVisit : '',
            modalOpened: false
        }
        this.changeVisitState = this.changeVisitState.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.modalToggle = this.modalToggle.bind(this)
    }
    modalToggle (event) { //SubmitForm
        event.preventDefault()
        this.setState({ modalOpened: !this.state.modalOpened })
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const inputName = target.name;

        this.setState({
            [inputName]: value
        });
        alert('testTime');
    }
    handleSelectChange(event){
        this.setState({practice: event.target.value});
        alert('testSelect');
    }
    changeVisitState(visitState){
        this.setState({
            timeVisit: visitState
        })
    }

    render() {
        const modalContainerClass = this.state.modalOpened ? 'modalContainer is-open' : 'modalContainer'
        const modalBoxClass = this.state.modalOpened ? 'modal modalbBox is-active' : 'modal modalbBox'
        return(
            <div className="bookAppointment z-depth-1">
                <h4 className="center red-text">Book appointment</h4>
                <form className="section" onSubmit={this.modalToggle}>
                    <SelectCustom
                        onChange={this.handleSelectChange}
                        options='Option 1, Option 2, Option 3'
                    />

                    <p className="valign-wrapper">
                        <i className="material-icons">location_on</i>
                        <span> Location address: {this.props.location.city}</span>
                    </p>

                    <RadioDate
                        value={this.props.timeVisit}
                        timeVisitState={this.state.timeVisit}
                        changeVisitState={this.changeVisitState}
                        onChange={this.handleInputChange}
                    />

                    <Row>
                        <Col s={12} className='center input-field'>
                            <ButtonCustom
                                onClick={this.modalToggle}
                                type="submit"
                                value="Submit"
                                text="See all appointment"
                                name="action"
                                className="waves-effect waves-light blue lighten-1"
                            />
                            <div className={modalContainerClass}
                                 onClick={this.modalToggle}>
                                <div className={modalBoxClass}>
                                    <div className="modal-content">
                                        <div className='center'>Select practice: {this.state.practice || 'nothing selected'}</div>
                                        <div className='center'>{this.props.location.city}</div>
                                        <div className='center'>Time of visit: {this.state.timeVisit || 'nothing selected'}</div>
                                        <img width="100%"
                                             style={{borderRadius: 3}}
                                             src="https://source.unsplash.com/random"
                                             alt="unsplash"/>
                                    </div>
                                    <div className="modal-footer">
                                        <ButtonCustom
                                            onClick={this.modalToggle}
                                            text="Close"
                                            name="action"
                                            className="waves-effect waves-light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
}

class SelectCustom extends Component {
    render() {
        // Get all options from option prop
        const selectOptions = this.props.options.split(", ");

        // Generate list of options
        const selectOptionsList = selectOptions.map((selectOption, index) => {
            return <option key={index} value={index}>{selectOption}</option>;
        });

        return (
            <Row>
                <Input
                    s={12}
                    id={this.props.id || null}
                    name={this.props.name || null}
                    required={this.props.required || null}
                    type='select'
                    label={this.props.label || null}
                >
                    <option value="" disabled selected>Select practice</option>
                    {selectOptionsList}
                </Input>
            </Row>
        );
    }
}


class ButtonCustom extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick || null}
                className={
                    this.props.className
                        ? `btn ${this.props.className}`
                        : "btn"
                }
                type={this.props.type || "button"}
                value={this.props.value || null}
                name={this.props.name || null}
            >
                {this.props.text}
            </button>
        );
    }
}




const url = 'https://raw.githubusercontent.com/kiparenkomb/json/master/time.json'
// const url = 'https://raw.githubusercontent.com/kiparenkomb/json/master/test.json'
// const url = 'https://raw.githubusercontent.com/kiparenkomb/json/master/test2.json'

class RadioDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minute: new Date().getMinutes(),
            hours: new Date().getHours(),
            timeFreeToday : [],
            timeFreeTomorrow : []
        }
        this.handleRadio = this.handleRadio.bind(this)
    }

    componentDidMount() {
        axios.get(url)
            .then(timeFreeToday => {
                this.setState({
                    timeFreeToday: timeFreeToday.data.timeFreeToday
                })
            })
        axios.get(url)
            .then(timeFreeTomorrow => {
                this.setState({
                    timeFreeTomorrow: timeFreeTomorrow.data.timeFreeTomorrow
                })
            })
    }

    handleRadio(e) {
        this.props.changeVisitState(e.target.value)
    }

    render() {
        const optionsToday = this.state.timeFreeToday.map((time, key) => {
            const timeNow = time.timeIt
            const timeZone = this.state.hours + ':' + this.state.minute
            if (timeNow >= timeZone) {
                return (
                    <div
                        key={key}
                        data-number={time.dateIt}
                        className="radioPad "
                    >
                        <div>
                            <label>
                                <input
                                    className="radioPad-radio"
                                    type="radio"
                                    name="timeFree"
                                    id={key}
                                    value={time.dateIt + ' ' + time.timeIt}
                                    onChange={this.handleRadio}
                                />
                                <span className='radioPad-wrapper z-depth-1 waves-effect waves-red'>{time.timeIt}</span>
                            </label>
                        </div>
                    </div>
                )
            }
        })
        const optionsTomorrow = this.state.timeFreeTomorrow.map((time, key) => {
            return (
                <div
                    key={key}
                    data-number={time.dateIt}
                    className="radioPad "
                >
                    <div>
                        <label>
                            <input
                                className="radioPad-radio"
                                type="radio"
                                name="timeFree"
                                id={key}
                                value={time.dateIt + ' ' + time.timeIt}
                                onChange={this.handleRadio}
                            />
                            <span className='radioPad-wrapper z-depth-1 waves-effect waves-red'>{time.timeIt}</span>
                        </label>
                    </div>
                </div>
            )
        })
        const todayAvailable = optionsToday.filter(function (x) {
            return x !== undefined;
        });
        return (
            <div className="row">
                <div className="radioContainer nextAvailable">
                    <h5 className="center">
                        {(todayAvailable.length) ? 'Next available' : null}
                    </h5>
                    <div className="radioBox">
                        {todayAvailable.shift()}
                    </div>
                </div>
                <div className="radioContainer today">
                    <h5 className="center">{(todayAvailable.length) ? 'Today' : null}</h5>
                    <div className="radioBox">
                        {todayAvailable}
                    </div>
                </div>
                <div className="radioContainer tomorrow">
                    <h5 className="center">{optionsTomorrow.length ? 'Tomorrow' : null}</h5>
                    <div className="radioBox">
                        {optionsTomorrow}
                    </div>
                </div>
            </div>
        )
    }
}


export default BookAppointment;
