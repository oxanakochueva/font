import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

export default class CardImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'letters'
    }
  }

  render() {
    let { folder, pair, view } = this.props

    // view === 'words'
    //   ? this.setState({
    //       view: 'words'
    //     })
    //   : view === 'phrase'
    //   ? this.setState({
    //       view: 'phrase'
    //     })
    //   : this.setState({
    //       view: 'letters'
    //     })
    //
    // let v = this.state.view

    return (
      <>
        <img
          className="fontPairImage words"
          id="image"
          src={require(`../../assets/images/pairs/words/${pair}.svg`)}
        />
        <img
          className="fontPairImage phrase"
          id="image"
          src={require(`../../assets/images/pairs/phrase/${pair}.svg`)}
        />
        <img
          className="fontPairImage letters"
          id="image"
          src={require(`../../assets/images/pairs/letters/${pair}.svg`)}
        />
      </>
    )
  }
}
