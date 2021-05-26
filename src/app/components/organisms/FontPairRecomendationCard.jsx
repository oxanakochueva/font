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
    const { pair, actions } = this.props
    actions.openPairPage(pair.id)
    this.scrollToTop()
  }

  render() {
    const { pair, actions, defaultValues } = this.props
    const { recomendationList } = defaultValues

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
