// React
import React from 'react'
import { Link } from 'react-router-dom'
// Components
import BadgesList from '../components/BadgesList'
import LoadingPage from '../components/LoadingPage'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader';
// Styles
import './styles/Badges.css'
// images
import confLogo from '../images/badge-header.svg'
//api 
import api from '../api'

class Badges extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount() {
    this.fetchData()
    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }

  }


  render() {
    if (this.state.loading === true && !this.state.data) {
      return <LoadingPage />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }


    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="conf logo" />
            </div>
          </div>

          <div className="Badge__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary float-right">New Badge</Link>
            </div>

            <div className="Badge__list">
              <BadgesList badges={this.state.data} />
            </div>
            {this.state.loading && <MiniLoader />}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;