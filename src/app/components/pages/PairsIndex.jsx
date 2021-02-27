import React from 'react'
import ReactDOM from 'react-dom'
import PairList from '../organisms/PairList'

export default class PairsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.changeImg = React.createRef()

    this.state = {}
  }

  render() {
    const { pairs, changeCardView, openPairShow } = this.props

    return (
      <PairList
        pairs={pairs}
        changeCardView={changeCardView}
        openPairShow={openPairShow}
      />
    )
  }
}
