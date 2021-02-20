import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
//import FontPairName from './FontPairName'

export default class FontCard extends React.Component {
  constructor(props) {
    super(props)

    // this.changeView = this.changeView.bind(this)
    // this.mouseOut = this.mouseOut.bind(this)
    // this.handleOpen = this.handleOpen.bind(this)
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

  //попытки функций картинок

  // changeView(e) {
  //   //let src = `../../assets/images/pairs/${this.state.imageUrl}/${e.target.value}.svg`
  //   e.preventDefault()
  //   // this.setState({
  //   //   imageUrl: e.target.value
  //   // })
  //   // require(`../../assets/images/pairs/${this.state.imageUrlHover}/${this.state.imageUrlHover}.svg`
  //   e.target.classList.contains('active')
  //     ? this.setState({
  //         imageUrl: e.target.id,
  //         imageView: e.target.id
  //       })
  //     : e.target.classList.add('active'),
  //     e.target.parentElement.classList.add('active'),
  //     this.setState({
  //       imageView: e.target.id,
  //       imageUrlHover: e.target.dataset.value
  //     })
  //
  //   let src = `../../assets/images/pairs/${this.state.imageView}/${this.state.imageUrlHover}.svg`
  //   e.target.parentElement.classList.contains('active')
  //     ? this.changeImg.current.src(require(src))
  //     : ''
  //
  //   // this.сhangeImg()
  //   // this.img.current.src(src)
  //   console.log(e.target)
  //   console.log(e.target.dataset.value)
  //   console.log(e.target.id)
  //   console.log(this.state.imageUrlHover)
  // }
  //
  // mouseOut(e) {
  //   e.preventDefault()
  //   e.target.classList.remove('active'),
  //     this.setState({
  //       imageUrl: this.state.lettersImageUrl,
  //       imageView: 'letters'
  //     })
  // }

  //

  // changeImg() {
  //   this.img.current.src(
  //     `../../assets/images/pairs/${this.state.imageUrlHover}/${this.state.imageUrlHover}.svg`
  //   )
  // }

  // handleOpen(e) {
  //   e.preventDefault()
  //   console.log('click', e.target.id)
  //   this.props.cards.filter(cards.id === e.target.id)
  // }

  render() {
    let card = this.props.pair

    return <div className="cardBlock">{card}</div>
  }
}
