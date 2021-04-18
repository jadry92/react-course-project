// React
import React from 'react'
// Styles
import './styles/BadgesList.css'


class BadgesList extends React.Component {

  render() {
    return (
      <ul className="BadgesListItem">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem__container">
              <div >
                <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt={`avatar of ${badge.firstName}`} />
              </div>
              <div className="BadgesListItem__text">
                <p>
                  {badge.firstName} {badge.lastName}
                </p>
                <p>
                  <a href={`https://twitter.com/${badge.twitter}`}>@{badge.twitter}</a>
                </p>
                <p>{badge.jobTitle}</p>
              </div>
            </li >
          );
        })
        }
      </ul >
    );
  }

}

export default BadgesList;