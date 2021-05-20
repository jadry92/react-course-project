// react
import React from 'react';
// components
import Gravatar from './Gravatar'
//style
import './styles/Badge.css'
//images 
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo conf" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} alt={null} />
          <h1>{this.props.firstName}<br />{this.props.lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    );
  }
}

export default Badge;