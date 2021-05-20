// react
import React from 'react';
// components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import LoadingPage from '../components/LoadingPage'
// Styles
import './styles/BadgeEdit.css'
// media
import header from '../images/platziconf-logo.svg'
// API
import api from '../api'

class BadgeEdit extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    },
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetchData()
  }

  async fetchData(e) {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.BadgeId)
      this.setState({ loading: false, form: data, error: null })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }

  }

  handelChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handelSubmit = async (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    try {
      await api.badges.update(this.props.match.params.BadgeId, this.state.form)
      this.setState({
        loading: false,
        error: null
      })
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  render() {
    if (this.props.loading) {
      return <LoadingPage />
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job'}
                twitter={this.state.form.twitter || 'Twitter Username'}
                email={this.state.form.email || 'Email'}
                imgAvatarURL="https://rickandmortyapi.com/api/character/avatar/231.jpeg"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm onSubmit={this.handelSubmit} onChange={this.handelChange} formValues={this.state.form} error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;