// react
import React from 'react';
// Css
import './styles/Navbar.css'
// media
import logo from '../images/logo.svg'

class BadgeForm extends React.Component {
  state = {};

  handelClick = (e) => {
    console.log('button was clicked');
  }

  handelSubmit = (e) => {
    e.preventDefault();
    console.log('form was sent');
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>

        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input onChange={this.props.onChange}
              className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
          </div>
          <div className="form-group">
            <label>email</label>
            <input onChange={this.props.onChange}
              className="form-control" type="email" name="email" value={this.props.formValues.email} />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input onChange={this.props.onChange}
              className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handelClick} className="btn btn-primary">Save</button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;