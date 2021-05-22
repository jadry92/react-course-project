// react
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './styles/BadgeDetails.css';
// images
import confLogo from '../images/platziconf-logo.svg';
// Components
import LoadingPage from '../components/LoadingPage'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
//api 
import api from '../api'

class BadgeDetails extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.BadgeId)
      this.setState({ loading: false, data: data, error: null })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }

  }

  render() {
    if (this.state.loading) {
      return <LoadingPage />
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    const badge = this.state.data
    console.log(badge);
    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col">
                <h1>{badge.firstName}   {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName || 'First Name'}
                lastName={badge.lastName || 'Last Name'}
                jobTitle={badge.jobTitle || 'Job'}
                twitter={badge.twitter || 'Twitter Username'}
                email={badge.email || 'Email'}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default BadgeDetails