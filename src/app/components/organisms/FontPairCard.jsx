import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCardImage from '../atoms/FontPairCardImage'

export default class FontPairCard extends React.Component {
  constructor(props) {
    super(props)
  }

  changeCardView = view => {
    const { pair, changeCardView } = this.props
    changeCardView(pair.id, view)
  }

  openPairPage = () => {
    const { pair, openPairPage, pairsInCurrentFolder } = this.props
    console.log(pairsInCurrentFolder)
    openPairPage(pair.id)
  }

  render() {
    const { pair, pairsInCurrentFolder } = this.props

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
        onClick={() => this.openPairPage()}
      >
        <div className="cardHeader">
          <div className="fontPairName">{pair.heading}</div>
        </div>
        <FontPairCardImage pair={pair.id} folder={pair.folder} view="letters" />
        <div className="cardViewTabs">
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
