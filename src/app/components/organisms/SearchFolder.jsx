import classnames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import FontPairList from './FontPairList'
import FontPairCard from './FontPairCard'

export default class SearchFolder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const {
      folder,
      pairs,
      changeCardView,
      openPairsPageShow,
      searchRequest
    } = this.props

    let cards = []

    pairs.forEach((pair, i) => {
      cards.push(
        <FontPairCard
          pair={pair}
          changeCardView={changeCardView}
          openPairsPageShow={openPairsPageShow}
          key={i}
        />
      )
    })

    return (
      <div className="fontFolder open" id={folder}>
        <>
          <div className="fontFolderName" style={{ fontFamily: 'PT Sans' }}>
            {pairs.length} results for «{searchRequest}»
          </div>
          <div className="FontPairList">{cards}</div>
        </>
      </div>
    )
  }
}
