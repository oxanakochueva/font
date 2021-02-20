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
      // <div className="fontPairImage">
      //   <img
      //     className="fontPairImage letters"
      //     id="image"
      //     src={require(`../../assets/images/pairs/letters/${pair}.svg`)}
      //   ></img>
      //   <img
      //     className="fontPairImage words hidden"
      //     id="image"
      //     src={require(`../../assets/images/pairs/words/${pair}.svg`)}
      //   ></img>
      // <img
      //   className="fontPairImage phrase hidden"
      //   id="image"
      //   src={require(`../../assets/images/pairs/phrase/${pair}.svg`)}
      // ></img>
      // </div>
      <div>
        {view === 'words' ? (
          <img
            className="fontPairImage words hidden"
            id="image"
            src={require(`../../assets/images/pairs/words/${pair}.svg`)}
          />
        ) : view === 'phrase' ? (
          <img
            className="fontPairImage phrase hidden"
            id="image"
            src={require(`../../assets/images/pairs/phrase/${pair}.svg`)}
          />
        ) : (
          <img
            className="fontPairImage letters hidden"
            id="image"
            src={require(`../../assets/images/pairs/letters/${pair}.svg`)}
          />
        )}
      </div>
    )
  }
}
