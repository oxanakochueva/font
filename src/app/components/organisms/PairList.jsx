import React from 'react'
import ReactDOM from 'react-dom'
import FontCard from './FontCard'

export default class PairList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { pairs, changeCardView, openPairShow } = this.props
    let cards = []

    pairs.forEach((pair, i) => {
      cards.push(
        <FontCard
          pair={pair}
          changeCardView={changeCardView}
          openPairShow={openPairShow}
          key={i}
        />
      )
    })
    return <div className="PairList">{cards}</div>
  }
}
