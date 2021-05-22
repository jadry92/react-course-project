// React
import React from 'react'
import { Link } from 'react-router-dom';
// components
import Gravatar from './Gravatar';
// Styles
import './styles/BadgesList.css'

class BadgesListItem extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} alt={`avatar of ${this.props.badge.firstName}`} />
        </div>
        <div className="BadgesListItem__text">
          <p>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p>
            <a href={`https://twitter.com/${this.props.badge.twitter}`}>@{this.props.badge.twitter}</a>
          </p>
          <p>{this.props.badge.jobTitle}</p>
        </div>
      </React.Fragment>
    )
  }
}


class BadgesList extends React.Component {

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="NotFound">
          <h3>No badges found</h3>
          <p>Pleas create a new badge</p>
        </div>
      )
    }

    return (
      <ul className="BadgesListItem">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem__container">
              <Link className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li >
          );
        })
        }
      </ul >
    );
  }

}

export default BadgesList;