// react
import React from 'react';
// Components
import Modal from './Modal'
// Style
import './styles/Modal.css'

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h2>Are you sure?</h2>
        <p>your about to delete this badge</p>
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-5">Delete</button>
          <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
        </div>
      </div>

    </Modal>
  )
}

export default DeleteBadgeModal;