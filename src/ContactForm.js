import React, { Component } from 'react';

class ContactPage extends Component{
  render() {
    return (
        <div className="container">
            <div className="row">
                <Header />
                <ContentBody />
                <ContactForm />
            </div>
            <br />
            <hr />
            <br />
        </div>
    );
  }
}

class Header extends Component{
  constructor(props){
    super(props);
  }
  render () {
    return (
        <div className="row">
            <div className="col s12">
                <h2 className="center">
                    Contact us
                </h2>
            </div>
        </div>
    );
  }
}

class ContentBody extends Component{
  render () {
    return (
        <div className="col s12 m7 l5">
            <div className="row">
                <div className="col s12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a congue nunc. Curabitur consectetur tortor est, ut dapibus lectus fermentum sed.
                        Aliquam maximus, libero quis fermentum vehicula, massa felis facilisis nisi, nec dignissim elit lorem non justo. In vel ultrices metus, at scelerisque massa.
                        Nulla finibus est in ante rutrum faucibus. Phasellus at consectetur massa. Suspendisse eget elementum purus, sit amet imperdiet velit.
                        Sed blandit iaculis dui, a tristique libero tincidunt vel. Sed gravida velit mauris, ac feugiat dui maximus eget. In in massa sapien.
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            <td>General enquiries</td>
                            <td>
                                <a href="mailto:support@findmedics.co.uk">support@findmedics.co.uk</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Partnership with clinics</td>
                            <td>
                                <a href="mailto:sales@findmedics.co.uk">sales@findmedics.co.uk</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>
                        Proin at imperdiet enim. Nulla facilisi. Suspendisse cursus urna et nisl fringilla, vitae vehicula libero rutrum.
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

class ContactForm extends Component {
    render() {
        return(
            <form className="col s12 m5 l5 offset-l2 z-depth-1">
                <Input
                    hasLabel="true"
                    htmlFor="username"
                    label="Name *"
                    required="true"
                />
                <Input
                    hasLabel="true"
                    htmlFor="useremail"
                    label="Email *"
                    required="true"
                    type="email"
                />
                <Input
                    hasLabel="true"
                    htmlFor="phone"
                    label="Mobile phone number"
                    placeholder="+125333677778"
                />
                <Select
                    hasLabel="true"
                    htmlFor="select"
                    label="Subject"
                    options="Option 1, Option 2, Option 3"
                />
                <Textarea
                    hasLabel="true"
                    htmlFor="textarea1"
                    label="Write here"
                />
                <div className="row">
                    <div className="input-field col s12 center">
                        <Button
                            type="submit"
                            value="Submit"
                            text="Submit"
                            name="action"
                            className="waves-effect waves-light"
                        />
                        <Button
                            text="Test"
                        />
                        <Button
                            type="reset"
                            value="Reset"
                            text="Reset"
                            className="waves-effect"
                        />
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
    }
  }
}

class Input extends Component {
  render() {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    className={this.props.class || "validate"}
                    id={this.props.htmlFor}
                    max={this.props.max || null}
                    min={this.props.min || null}
                    name={this.props.name || null}
                    placeholder={this.props.placeholder || null}
                    required={this.props.required || null}
                    step={this.props.step || null}
                    type={this.props.type || "text"}
                />
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

class Select extends React.Component {
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

class Textarea extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="input-field col s12">
                <textarea
                    className={this.props.class || "materialize-textarea"}
                    cols={this.props.cols || null}
                    id={this.props.htmlFor}
                    name={this.props.name || null}
                    required={this.props.required || null}
                    rows={this.props.rows || null}
                />
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

export default ContactPage;
