import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import CardImage from '../atoms/CardImage'

export default class FontCard extends React.Component {
  constructor(props) {
    super(props)
  }

  changeCardView = view => {
    const { pair, changeCardView } = this.props
    changeCardView(pair.id, view)
  }

  openPairShow = () => {
    const { pair, openPairShow } = this.props
    openPairShow(pair.id)
  }

  render() {
    const { pair } = this.props

    const classes = classnames({
      fontPairCard: true,
      letters: pair.view === 'letters',
      words: pair.view === 'words',
      phrase: pair.view === 'phrase'
    })

    // return <div className="cardBlock">{card}</div>
    return (
      <div
        className={classes}
        id={pair.folder}
        onClick={() => this.openPairShow()}
      >
        <div className="top">
          <div className="pairName">{pair.heading}</div>
        </div>
        <CardImage pair={pair.id} folder={pair.folder} view="letters" />
        <div className="tabs">
          <div
            id="letters"
            className="tab letters"
            onMouseOver={() => this.changeCardView('letters')}
            onMouseOut={() => this.changeCardView('letters')}
          >
            Letters
          </div>
          <div
            id="words"
            className="tab words"
            onMouseOver={() => this.changeCardView('words')}
            onMouseOut={() => this.changeCardView('letters')}
          >
            Words
          </div>
          <div
            id="phrase"
            className="tab phrase"
            onMouseOver={() => this.changeCardView('phrase')}
            onMouseOut={() => this.changeCardView('letters')}
          >
            Phrase
          </div>
        </div>
      </div>
    )
  }
}
