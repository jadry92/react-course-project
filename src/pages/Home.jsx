// React
import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './styles/Home.css'
//Images
import astronauts from '../images/astronauts.svg'
import platziConfLogo from '../images/platziconf-logo.svg'

class Home extends React.Component {

  render() {
    return (
      <section className="Home">
        <div className="Home__container">
          <img className="Home__container-logo" src={platziConfLogo} alt="logo platzi" />
          <h3>PRINT AND CREATE YOUR BADGES</h3>
          <p> The easiest way to manage your conference</p>
          <Link className="btn btn-primary float-right" to="/badges" >Start Now</Link>
        </div>
        <div className="Home__container">
          <img className="Home_astronauts" src={astronauts} alt="astronauts" />
        </div>
      </section>
    )
  }
}

export default Home;