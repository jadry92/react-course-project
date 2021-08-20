// Styles
import './styles/BadgesList.css'

// components
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';
// React
import React from 'react'

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
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      filterBadges: props.badges,
    }
  }

  handelSearch = (event) => {
    const query = event.target.value
    const filterBadges = this.props.badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({ query: query, filterBadges: filterBadges })
  }



  render() {
    if (this.state.filterBadges.length === 0) {
      return (
        <div className="BadgesList">
          <InputSearch query={this.state.query} onChangeInput={this.handelSearch} />
          <div className="NotFound">
            <h3>No badges found</h3>
            <p>Pleas create a new badge</p>
          </div>
        </div>
      )
    }

    return (
      <div className="BadgesList">
        <InputSearch query={this.state.query} onChangeInput={this.handelSearch} />
        <ul className="BadgesListItem">
          {this.state.filterBadges.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem__container">
                <Link className="text-reset text-decoration-none"
                  to={`/ badges / ${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li >
            );
          })
          }
        </ul >
      </div>
    );
  }

}


const InputSearch = (props) => {

  return (
    <div className="form-group">
      <label>Filter Badges</label>
      <input
        type="text"
        className="form-control"
        value={props.query}
        onChange={props.onChangeInput}
      />
    </div>
  );
};

export default BadgesList;