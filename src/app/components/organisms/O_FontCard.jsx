import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
//import FontPairName from './FontPairName'
import Star from '../quarks/Q_Star'

export default class FontCard extends React.Component {
  constructor(props) {
    super(props)

    this.changeView = this.changeView.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    this.handleClickFavourite = this.handleClickFavourite.bind(this)

    this.state = {
      imageView: 'letters',
      // lettersImageUrl: '../../assets/images/pairs/letters/',
      // wordsImageUrl: '../../assets/images/pairs/words/',
      // phraseImageUrl: '../../assets/images/pairs/phrase/',
      // imageUrl: '../../assets/images/pairs/letters/'
      lettersImageUrl: 'letters',
      wordsImageUrl: 'words',
      phraseImageUrl: 'phrase',
      imageUrl: 'letters',

      favourite: false,
      favouritePairs: {}
    }
  }

  changeView(e) {
    //let src = `../../assets/images/pairs/${this.state.imageUrl}/${e.target.value}.svg`
    e.preventDefault()
    // this.setState({
    //   imageUrl: e.target.value
    // })
    e.target.classList.contains('active')
      ? ''
      : e.target.classList.add('active'),
      this.setState({
        imageView: e.target.id
      })

    // e.target.value ==
    // e.target.parentElement.getElementsByClassName('fontPairCard').value
    //   ? e.target.parentElement.getElementsByClassName('fontPairImage').src(src)
    //   : ''

    e.target.classList.contains('words')
      ? this.setState({
          imageUrl: this.state.wordsImageUrl
        })
      : e.target.classList.contains('phrase')
      ? this.setState({
          imageUrl: this.state.phraseImageUrl
        })
      : this.setState({
          imageUrl: this.state.lettersImageUrl
        })
  }

  mouseOut(e) {
    e.preventDefault()
    e.target.classList.remove('active'),
      this.setState({
        imageUrl: this.state.lettersImageUrl,
        imageView: 'letters'
      })
  }

  handleClickFavourite(e) {
    console.log('click f')
    e.preventDefault()

    e.target.value == false
      ? this.setState(
          { favourite: true, favouritePairs: e.target.name },
          e.target.classList.add('starActive')
        )
      : this.setState({ favourite: false, favouritePairs: '' })
  }

  render() {
    console.log(this.state.imageUrl)

    let { fontPairs } = this.props
    let { favourite } = this.state
    // const image = require(imageUrl + ${fontPair.pairName} + '.svg')

    let pairName = fontPairs.map((fontPair, i) => (
      <div key={i} className="fontPairCard" value={fontPair.pairName}>
        <div key={i} className="top">
          <div key={i} className="pairName">
            {fontPair.pairName}
          </div>
          <Star
            handleClick={this.handleClickFavourite}
            value={this.favourite}
            name={fontPair.pairName}
          />
        </div>
        <img
          className="fontPairImage"
          id="image"
          //src={require(`../../assets/images/pairs/letters/${fontPair.pairName}.svg`)}
          // src={require(`${imageUrl}${fontPair.pairName}.svg`)}
          // src={image}
          src={require(`../../assets/images/pairs/${this.state.imageUrl}/${fontPair.pairName}.svg`)}
        ></img>
        <div className="tabs">
          <div
            id="letters"
            value={fontPair.pairName}
            className="tab letters active"
            onMouseOver={this.changeView}
            onMouseOut={this.mouseOut}
          >
            Letters
          </div>
          <div
            id="words"
            value={fontPair.pairName}
            className="tab words"
            onMouseOver={this.changeView}
            onMouseOut={this.mouseOut}
          >
            Words
          </div>
          <div
            id="phrase"
            value={fontPair.pairName}
            className="tab phrase"
            onMouseOver={this.changeView}
            onMouseOut={this.mouseOut}
          >
            Phrase
          </div>
        </div>
      </div>
    ))
    let cards = []

    cards.push(pairName)

    console.log(cards)
    return <div className="cardBlock">{cards}</div>
  }
}
