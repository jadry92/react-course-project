// react
import React from 'react';
// components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
// Styles
import './styles/BadgeNew.css'
// media
import header from '../images/badge-header.svg'

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handelChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                imgAvatarURL="https://rickandmortyapi.com/api/character/avatar/231.jpeg"
              />
            </div>
            <div>
              <BadgeForm onChange={this.handelChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;