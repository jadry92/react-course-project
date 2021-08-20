// react
import React from 'react';

// Components
import LoadingPage from '../components/LoadingPage'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
//api 
import api from '../api'

class BadgeDetailsContainer extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
    isOpenModal: false,
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

  handleOpenModal = (e) => {
    this.setState({ isOpenModal: true })
  }

  handleCloseModal = (e) => {
    this.setState({ isOpenModal: false })
  }

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(this.props.match.params.BadgeId)
      this.setState({ loading: false, error: null })
      this.props.history.push('/badges')
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

    return (
      <BadgeDetails
        isOpenModal={this.state.isOpenModal}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data} />
    )
  }
}
// 'handel' handle 

export default BadgeDetailsContainer