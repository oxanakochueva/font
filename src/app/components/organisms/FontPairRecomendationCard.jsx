import React from 'react'
import ReactDOM from 'react-dom'

export default class FontPairRecomendationCard extends React.Component {
  constructor(props) {
    super(props)
  }

  openPairPage = () => {
    const { pair, openPairPage } = this.props
    openPairPage(pair.id)
  }

  render() {
    const { pair, openPairPage } = this.props
    return (
      <div
        className="FontPairRecomendationCard"
        onClick={() => this.openPairPage()}
        title={pair.heading}
      >
        <img className="cardImage"></img>
      </div>
    )
  }
}
