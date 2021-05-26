import React from 'react'
import ReactDOM from 'react-dom'
import FontPairCard from './FontPairCard'

export default class FontPairList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { folder, pairs, actions, defaultValues } = this.props

    const { changeCardView, openPairPage } = actions
    const { defaultCardView } = defaultValues
    let cards = []

    pairs.forEach((pair, i) => {
      if (pair.folder === folder) {
        cards.push(
          <FontPairCard
            folder={folder}
            pair={pair}
            actions={actions}
            defaultValues={defaultValues}
            key={i}
          />
        )
      }
    })
    return <div className="FontPairList">{cards}</div>
  }
}
