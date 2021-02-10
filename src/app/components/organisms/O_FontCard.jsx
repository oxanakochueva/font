import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
//import FontPairName from './FontPairName'

export default class FontCard extends React.Component {
  constructor(props) {
    super(props)

    this.changeView = this.changeView.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    // this.changeImg = this.changeImg.bind(this)

    this.changeImg = React.createRef()

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
      imageUrlHover: '',

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
    // require(`../../assets/images/pairs/${this.state.imageUrlHover}/${this.state.imageUrlHover}.svg`
    e.target.classList.contains('active')
      ? this.setState({
          imageUrl: e.target.id,
          imageView: e.target.id
        })
      : e.target.classList.add('active'),
      e.target.parentElement.classList.add('active'),
      this.setState({
        imageView: e.target.id,
        imageUrlHover: e.target.dataset.value
      })

    let src = `../../assets/images/pairs/${this.state.imageView}/${this.state.imageUrlHover}.svg`
    e.target.parentElement.classList.contains('active')
      ? this.changeImg.current.src(require(src))
      : ''

    // this.сhangeImg()
    // this.img.current.src(src)
    console.log(e.target)
    console.log(e.target.dataset.value)
    console.log(e.target.id)
    console.log(this.state.imageUrlHover)
  }

  mouseOut(e) {
    e.preventDefault()
    e.target.classList.remove('active'),
      this.setState({
        imageUrl: this.state.lettersImageUrl,
        imageView: 'letters'
      })
  }

  // changeImg() {
  //   this.img.current.src(
  //     `../../assets/images/pairs/${this.state.imageUrlHover}/${this.state.imageUrlHover}.svg`
  //   )
  // }

  render() {
    console.log(this.state.imageUrlHover)

    let pairs = this.props.pairs
    console.log(pairs)
    // const image = require(imageUrl + ${fontPair.pairName} + '.svg')

    let pairCard = pairs.map((pair, i) => (
      <div key={i} className="fontPairFolder">
        <div key={i} className="fontPairCard">
          <div key={i} className="top">
            <div key={i} className="pairName">
              {pair.heading}
            </div>
          </div>
          <img
            className="fontPairImage"
            id="image"
            ref={this.changeImg}
            //src={require(`../../assets/images/pairs/letters/${fontPair.pairName}.svg`)}
            // src={require(`${imageUrl}${fontPair.pairName}.svg`)}
            // src={image}
            src={require(`../../assets/images/pairs/${this.state.imageUrl}/${pair.id}.svg`)}
          ></img>
          <div className="tabs">
            <div
              id="letters"
              data-value={pair.id}
              className="tab letters active"
              onMouseOver={this.changeView}
              onMouseOut={this.mouseOut}
            >
              Letters
            </div>
            <div
              id="words"
              data-value={pair.id}
              className="tab words"
              onMouseOver={this.changeView}
              onMouseOut={this.mouseOut}
            >
              Words
            </div>
            <div
              id="phrase"
              data-value={pair.id}
              className="tab phrase"
              onMouseOver={this.changeView}
              onMouseOut={this.mouseOut}
            >
              Phrase
            </div>
          </div>
        </div>
      </div>
    ))
    let cards = []
    let folders = []

    cards.push(pairCard)

    console.log(cards)
    return <div className="cardBlock">{cards}</div>
  }
}
