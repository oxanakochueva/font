import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FontCard from '../organisms/O_FontCard'

export default class FontPairName extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    let { fontPairs } = this.props

    let pairName = fontPairs.map((fontPair, i) => (
      <div key={i}>{fontPair.pairName}</div>
    ))

    return <div key={i}>{pairName[i]}</div>
  }
}
