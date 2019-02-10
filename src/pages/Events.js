import React, { Component } from 'react'

import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import './Events.scss'

class EventsPage extends Component {
  state = {
    creating: false
  }

  openCreateEventModal = () => {
    this.setState({ creating: true })
  }

  modalConfirmHandeler = () => {
    this.setState({ creating: false })
  }

  modalCancelHandler = () => {
    this.setState({ creating: false })
  }
  render () {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title='Add Event'
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandeler}
          >
            <p>Modal Content</p>
          </Modal>
        )}
        <div className='events-control'>
          <p>Share your own Events!</p>
          <button className='btn' onClick={this.openCreateEventModal}>Create Event</button>
        </div>
      </React.Fragment>
    )
  }
}

export default EventsPage
