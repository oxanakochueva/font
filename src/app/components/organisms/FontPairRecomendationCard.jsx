import React from 'react'
import ReactDOM from 'react-dom'

export default class FontPairRecomendationCard extends React.Component {
  constructor(props) {
    super(props)
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  openPairPage = () => {
    const { pair, openPairPage } = this.props
    openPairPage(pair.id)
    this.scrollToTop()
  }

  render() {
    const { pair, openPairPage, recomendationList } = this.props

    recomendationList.push(pair.id)

    return (
      <div
        className="FontPairRecomendationCard"
        onClick={() => this.openPairPage()}
        title={pair.heading}
      >
        <img
          className="cardImage"
          src={require(`../../assets/images/pairs/articles/4x/${pair.id}.png`)}
        />
      </div>
    )
  }
}
