import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCard from './FontPairCard'

export default class FontPairList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { folder, actions, defaultValues } = this.props

    const { changeCardView, openPairsPageShow } = actions
    const { defaultCardView } = defaultValues
    let cards = []

    folder.pairs.forEach((pair, i) => {
      cards.push(
        <FontPairCard
          pair={pair}
          actions={actions}
          defaultValues={defaultValues}
          key={i}
        />
      )
    })
    return <div className="FontPairList">{cards}</div>
  }
}
