import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCard from './FontPairCard'

export default class FontPairList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const {
      folder,
      pairs,
      changeCardView,
      openPairPage,
      defaultCardView
    } = this.props
    let cards = []

    pairs.forEach((pair, i) => {
      if (pair.folder === folder) {
        cards.push(
          <FontPairCard
            folder={folder}
            pair={pair}
            changeCardView={changeCardView}
            openPairPage={openPairPage}
            defaultCardView={defaultCardView}
            key={i}
          />
        )
      }
    })
    return <div className="FontPairList">{cards}</div>
  }
}
