import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCardImage from '../atoms/FontPairCardImage'

export default class FontPairCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pair, actions, defaultValues } = this.props
    const { defaultCardView } = defaultValues
    const { openPairsPageShow, changeCardView } = actions

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

    return (
      <div
        className={classes}
        id={pair.folder}
        onClick={() => openPairsPageShow(pair.id)}
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
            onMouseOver={() => changeCardView(pair.id, 'letters')}
            onMouseOut={() => changeCardView(pair.id, defaultCardView)}
          >
            Letters
          </div>
          <div
            className="tab words"
            onMouseOver={() => changeCardView(pair.id, 'words')}
            onMouseOut={() => changeCardView(pair.id, defaultCardView)}
          >
            Words
          </div>
          <div
            className="tab phrase"
            onMouseOver={() => changeCardView(pair.id, 'phrase')}
            onMouseOut={() => changeCardView(pair.id, defaultCardView)}
          >
            Phrase
          </div>
        </div>
      </div>
    )
  }
}
