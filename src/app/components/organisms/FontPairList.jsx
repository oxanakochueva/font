import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCard from './FontPairCard'

export default class FontPairList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { folder, pairs, changeCardView, openPairPage } = this.props
    let cards = []
    let pairsInCurrentFolder = []

    pairs.forEach((pair, i) => {
      if (pair.folder === folder) {
        pairsInCurrentFolder.push(pair)
        cards.push(
          <FontPairCard
            folder={folder}
            pair={pair}
            changeCardView={changeCardView}
            openPairPage={openPairPage}
            key={i}
            pairsInCurrentFolder={pairsInCurrentFolder}
          />
        )
      }
    })
    return <div className="FontPairList">{cards}</div>
  }
}
