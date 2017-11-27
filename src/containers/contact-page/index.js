import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';

class ContactPage extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ContentHeader />
                    <ContentBody />
                    <ContactForm />
                </div>
            </div>
        );
    }
}

class ContentHeader extends Component{
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
            <div className="col s12 m5 l5 offset-l2 z-depth-1">
                <form className="section">
                    <InputCustom
                        hasLabel="true"
                        htmlFor="username"
                        label="Name *"
                        required="true"
                    />
                    <InputCustom
                        hasLabel="true"
                        htmlFor="useremail"
                        label="Email *"
                        required="true"
                        type="email"
                    />
                    <InputCustom
                        activeLabel="active"
                        htmlFor="phone"
                        label="Mobile phone number"
                        placeholder="+125333677778"
                    />
                    <SelectCustom
                        label="Subject"
                        options="Option 1, Option 2, Option 3"
                    />
                    <TextareaCustom
                        hasLabel="true"
                        htmlFor="textarea1"
                        label="Write here"
                    />
                    <div className="row">
                        <div className="input-field col s12 center">
                            <ButtonCustom
                                type="submit"
                                value="Submit"
                                text="Submit"
                                name="action"
                                className="waves-effect waves-light"
                            />
                            <ButtonCustom
                                type="reset"
                                value="Reset"
                                text="Reset"
                                className="waves-effect"
                            />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

class LabelCustom extends Component {
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

class InputCustom extends Component {
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
                    <LabelCustom
                        activeLabel={this.props.activeLabel}
                        hasLabel={this.props.hasLabel}
                        htmlFor={this.props.htmlFor}
                        label={this.props.label}
                    />
                </div>
            </div>
        );
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
                    id={this.props.htmlFor}
                    name={this.props.name || null}
                    required={this.props.required || null}
                    type='select'
                    label={this.props.label}
                    defaultValue={this.props.defaultValue || ''}
                >
                    <option value="" disabled selected>Select a reason</option>
                    {selectOptionsList}
                </Input>
            </Row>
        );
    }
}

class TextareaCustom extends Component {
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
                    <LabelCustom
                        hasLabel={this.props.hasLabel}
                        htmlFor={this.props.htmlFor}
                        label={this.props.label}
                    />
                </div>
            </div>
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

export default ContactPage;
