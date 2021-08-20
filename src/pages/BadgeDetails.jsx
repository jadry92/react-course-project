//react
import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
// Styles
import './styles/BadgeDetails.css';
// images
import confLogo from '../images/platziconf-logo.svg';

function BadgeDetails(props) {
  const badge = props.badge;
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
                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal isOpen={props.isOpenModal} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails;