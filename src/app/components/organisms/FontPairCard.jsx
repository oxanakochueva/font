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

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }

  openPairPage = () => {
    const { pair, openPairPage } = this.props
    openPairPage(pair.id)
    this.scrollToTop()
  }

  render() {
    const { pair, defaultCardView } = this.props

    // const classes = classnames({
    //   fontPairCard: true,
    //   letters: defaultCardView === 'letters',
    //   words: defaultCardView === 'words',
    //   phrase: defaultCardView === 'phrase'
    // })
    //
    // const tabs = classnames({
    //   cardViewTabs: true,
    //   letters: defaultCardView === 'letters',
    //   words: defaultCardView === 'words',
    //   phrase: defaultCardView === 'phrase'
    // })

    const classes = classnames({
      fontPairCard: true,
      letters: pair.view === 'letters',
      words: pair.view === 'words',
      phrase: pair.view === 'phrase'
    })

    const tabs = classnames({
      cardViewTabs: true,
      letters: pair.view === 'letters',
      words: pair.view === 'words',
      phrase: pair.view === 'phrase'
    })

    // return <div className="cardBlock">{card}</div>
    // console.log('hi', defaultCardView)
    return (
      <div
        className={classes}
        id={pair.folder}
        onClick={() => this.openPairPage()}
      >
        <div className="cardHeader">
          <div className="fontPairName">{pair.heading}</div>
        </div>
        <FontPairCardImage
          pair={pair.id}
          folder={pair.folder}
          view={defaultCardView}
        />
        <div className={tabs}>
          <div
            className="tab letters"
            onMouseOver={() => this.changeCardView('letters')}
            onMouseOut={() => this.changeCardView(defaultCardView)}
          >
            Letters
          </div>
          <div
            className="tab words"
            onMouseOver={() => this.changeCardView('words')}
            onMouseOut={() => this.changeCardView(defaultCardView)}
          >
            Words
          </div>
          <div
            className="tab phrase"
            onMouseOver={() => this.changeCardView('phrase')}
            onMouseOut={() => this.changeCardView(defaultCardView)}
          >
            Phrase
          </div>
        </div>
      </div>
    )
  }
}
