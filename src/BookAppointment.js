import React, { Component } from 'react';
// import $ from 'jquery';


class BookAppointment extends Component {
  constructor(props){
    super(props)
    this.state = {
      practive : '',
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
  }
  handleSelectChange(event){
    this.setState({practive: event.target.value})
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
          <form className="col s12 m12 l12 z-depth-1" onSubmit={this.modalToggle}>
          <div className="row">
                <div className="input-field col s12">
                    <select value={this.state.practive} onChange={this.handleSelectChange}>
                        <option value="" disabled selected>Select practice</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <label>Select practice 1</label>
                </div>
            </div>
            <Select
                value={this.state.practive}
                onChange={this.handleSelectChange}
                hasLabel="true"
                htmlFor="select"
                label="Select practice 2"
                options="Option 1, Option 2, Option 3"
            />
            <br/>

            <p key={this.props.key}>
              <i className="material-icons">location_on</i>
              <span> Location address: {this.props.location.city}</span>
            </p>

            <RadioDate
                value={this.props.timeVisit}
                timeVisitState={this.state.timeVisit}
                changeVisitState={this.changeVisitState}
                onChange={this.handleInputChange}
            />

            <div className="row">
                <div className="input-field col s12 center">
                    <Button
                        onClick={this.modalToggle}
                        type="submit"
                        value="Submit"
                        text="Submit"
                        name="action"
                        className="waves-effect waves-light"
                    />
                    <div className={modalContainerClass} onClick={this.modalToggle}>
                        <div className={modalBoxClass}>
                            <div className="modal-content">
                                <div className='center'>Select practice: {this.state.practive || 'nothing selected'}</div>
                                <div className='center'>{this.props.location.city}</div>
                                <div className='center'>Time of visit: {this.state.timeVisit || 'nothing selected'}</div>
                                <img width="100%" style={{borderRadius: 3}} src="https://source.unsplash.com/random" alt="unsplash"/>
                            </div>
                            <div className="modal-footer">
                                <Button
                                    onClick={this.modalToggle}
                                    text="Close"
                                    name="action"
                                    className="waves-effect waves-light"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
  }
}

class Label extends Component {
  render() {
    if (this.props.hasLabel === "true") {
      return (
          <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
      );
    } else if (this.props.activeLabel === "active") {
      return (
          <label className="active" htmlFor={this.props.htmlFor}>{this.props.label}</label>
      );
    } else {
      return (
          <label></label>
      );
    }
  }
}


class Select extends Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(", ");

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>;
    });

    return (
        <div className="row">
            <div className="input-field col s12">
                <select
                    defaultValue=""
                    id={this.props.htmlFor}
                    name={this.props.name || null}
                    required={this.props.required || null}
                >
                    <option value="" disabled selected>Select a reason</option>
                  {selectOptionsList}
                </select>
                <Label
                    hasLabel={this.props.hasLabel}
                    htmlFor={this.props.htmlFor}
                    label={this.props.label}
                />
            </div>
        </div>
    );
  }
}


class Button extends Component {
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


const timeFreeToday =  [
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '10:0'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '10:30'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '11:00'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '11:30'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '12:00'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '12:30'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '13:00'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '13:30'
    },
    {
      'id': 'i554',
      'dateIt': 'today',
      'timeIt': '14:00'
    },
    {
      'id': 'i555',
      'dateIt': 'today',
      'timeIt': '16:50'
    },
    {
      'id': 'i556',
      'dateIt': 'today',
      'timeIt': '17:05'
    },
    {
      'id': 'i557',
      'dateIt': 'today',
      'timeIt': '17:30'
    },
    {
      'id': 'i558',
      'dateIt': 'today',
      'timeIt': '17:45'
    },
    {
      'id': 'i559',
      'dateIt': 'today',
      'timeIt': '18:10'
    },
    {
      'id': 'i560',
      'dateIt': 'today',
      'timeIt': '18:25'
    }
];
const timeFreeTomorrow =  [
    {
      'id': 'i561',
      'dateIt': 'tomorrow',
      'timeIt': '09:05'
    },
    {
      'id': 'i562',
      'dateIt': 'tomorrow',
      'timeIt': '10:30'
    },
    {
      'id': 'i563',
      'dateIt': 'tomorrow',
      'timeIt': '17:45'
    }
];


class RadioDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minute: new Date().getMinutes(),
      hours: new Date().getHours(),
      timeVisit: ''
    }
    this.handleRadio = this.handleRadio.bind(this)

  }
  handleRadio(e) {
    this.props.changeVisitState(e.target.value)
  }
  render() {

    const timeVisit = this.state.timeVisit
    const optionsToday = timeFreeToday.map((time, key) => {
      const isCurrent = this.state.timeVisit === time
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
                <label
                    className={
                      isCurrent ?
                          'radioPad-wrapper radioPad-wrapper--selected z-depth-1 waves-effect' :
                          'radioPad-wrapper z-depth-1 waves-effect waves-light'
                    }
                >
                  <input
                      className="radioPad-radio"
                      type="radio"
                      name="timeFree"
                      id={key}
                      value={time.dateIt + ' ' + time.timeIt}
                      onChange={this.handleRadio}
                  />
                  {time.timeIt}
                </label>
              </div>
            </div>
        )
      }
    })


    const optionsTomorrow = timeFreeTomorrow.map((time, key) => {
      const isCurrent = this.state.timeVisit === time


        return (

            <div
                key={key}
                data-number={time.dateIt}
                className="radioPad "
            >
              <div>
                <label
                    className={
                      isCurrent ?
                          'radioPad-wrapper radioPad-wrapper--selected z-depth-1 waves-effect' :
                          'radioPad-wrapper z-depth-1 waves-effect waves-light'
                    }
                >
                  <input
                      className="radioPad-radio"
                      type="radio"
                      name="timeFree"
                      id={key}
                      value={time.dateIt + ' ' + time.timeIt}
                      onChange={this.handleRadio}
                  />
                  {time.timeIt}
                </label>
              </div>
            </div>
        )

    })
    const todayAvailable = optionsToday.filter(function(x) {
      return x !== undefined;
    });
    return (
        <div className="row">
          <div className="radioContainer nextAvailable">
            <h5 className="center">
              <strong>{timeVisit.charAt(0).toUpperCase() + timeVisit.substr(1)}</strong>
              {timeVisit ? ', is Your time!' : 'Next available'}
            </h5>
            <div className="radioBox">
              {todayAvailable.shift()}
            </div>
          </div>
          <div className="radioContainer today">
            <h5 className="center">{(todayAvailable.length) ? 'Today' : ''}</h5>
            <div className="radioBox">
              {todayAvailable}
            </div>
          </div>
          <div className="radioContainer tomorrow">
            <h5 className="center">{optionsTomorrow.length ? 'Tomorrow' : ''}</h5>
            <div className="radioBox">
              {optionsTomorrow}
            </div>
          </div>
        </div>
    )
  }
}


export default BookAppointment;