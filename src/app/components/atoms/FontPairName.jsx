import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FontPairCard from '../organisms/FontPairCard'

export default class FontPairName extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { fontPairs } = this.props

    let pairName = fontPairs.map((fontPair, i) => (
      <div key={i}>{fontPair.pairName}</div>
    ))

    return <div key={i}>{pairName[i]}</div>
  }
}
